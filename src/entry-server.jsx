import { renderToString } from 'react-dom/server';
import App from './App';

export function render() {
  return { html: renderToString(<App />) };
}
