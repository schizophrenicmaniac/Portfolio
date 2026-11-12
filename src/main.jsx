import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

if (import.meta.env.VITE_POSTHOG_PROJECT_TOKEN) {
  // Loaded after the page has finished loading so analytics stays out of the main bundle
  const loadPosthog = async () => {
    const { default: posthog } = await import('posthog-js');
    posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN, {
      api_host: import.meta.env.VITE_POSTHOG_HOST,
      defaults: '2026-08-30',
      disable_surveys: true,
    });
  };

  if (document.readyState === 'complete') {
    loadPosthog();
  } else {
    window.addEventListener('load', loadPosthog, { once: true });
  }
}

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
