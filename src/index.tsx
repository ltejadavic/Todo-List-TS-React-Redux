// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Asegúrate de importar Provider de react-redux
import { store } from './app/store'; // Asegúrate de importar tu store
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Envolver la aplicación en el Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Si quieres medir el rendimiento de la aplicación, puedes pasar una función para loguearlo
reportWebVitals();