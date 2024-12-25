// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import * as serviceWorkerRegistration from './serviceWorker';
import ResizeObserver from 'resize-observer-polyfill';

if (typeof window.ResizeObserver === 'undefined') {
  window.ResizeObserver = ResizeObserver;
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
      
        <App />
  
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Please ensure the element with id "root" exists in your HTML.');
}

serviceWorkerRegistration.register();

