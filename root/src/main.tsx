import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerApplication, start, getAppNames } from 'single-spa';
import App from './App.tsx';
import './index.css';

const apps = [{ name: '@demo/mife', activeWhen: '/' }];
const mifeAModule = '@demo/mife';
apps.forEach(({ name, activeWhen }) =>
  registerApplication({
    name,
    activeWhen,
    app: () => import(/* @vite-ignore */ mifeAModule),
  })
);

if (process.env.NODE_ENV === 'development') {
  console.log(getAppNames());
  localStorage.setItem('imo-ui', 'true');
} else {
  localStorage.setItem('imo-ui', 'false');
}
setTimeout(() => {
  start();
}, 1000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
