import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distHtmlPath = path.resolve(rootDir, 'dist/index.html');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');

async function prerender() {
  if (!fs.existsSync(distHtmlPath)) {
    console.error('Error: dist/index.html does not exist. Run "vite build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(distHtmlPath, 'utf-8');

  // Build production SSR bundle so asset paths match production hashes
  await build({
    root: rootDir,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist-ssr',
      emptyOutDir: true,
    },
    logLevel: 'warn',
  });

  try {
    const serverEntryPath = path.resolve(distSsrDir, 'entry-server.js');
    const { render } = await import(pathToFileURL(serverEntryPath).href);
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
    console.log('✅ Successfully pre-rendered static HTML into dist/index.html with production assets');
  } catch (error) {
    console.error('❌ Prerender failed:', error);
    process.exit(1);
  } finally {
    if (fs.existsSync(distSsrDir)) {
      fs.rmSync(distSsrDir, { recursive: true, force: true });
    }
  }
}

prerender();
