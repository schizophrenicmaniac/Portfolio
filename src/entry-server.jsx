import { renderToString } from 'react-dom/server';
import App from './App';

export function render() {
  const helmetContext = {};
  const html = renderToString(<App helmetContext={helmetContext} />);
  return { html, helmet: helmetContext.helmet };
}
