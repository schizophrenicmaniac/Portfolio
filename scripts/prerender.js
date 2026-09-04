import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distHtmlPath = path.resolve(rootDir, 'dist/index.html');

async function prerender() {
  if (!fs.existsSync(distHtmlPath)) {
    console.error('Error: dist/index.html does not exist. Run "vite build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(distHtmlPath, 'utf-8');

  // Create a Vite dev server in middleware mode to load SSR modules cleanly
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
    const { html: appHtml } = render();

    // Replace root placeholder with pre-rendered application HTML
    let renderedHtml = template.replace(
      '<div id="root"><!--app-html--></div>',
      `<div id="root">${appHtml}</div>`
    );

    if (!renderedHtml.includes(appHtml)) {
      renderedHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );
    }

    fs.writeFileSync(distHtmlPath, renderedHtml, 'utf-8');
    console.log('✅ Successfully pre-rendered static HTML into dist/index.html');
  } catch (error) {
    console.error('❌ Prerender failed:', error);
    process.exit(1);
  } finally {
    await vite.close();
  }
}

prerender();
