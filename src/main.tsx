// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Asegúrate de importar Provider
import { store } from './app/store'; // Importa el store que configuraste
import App from './App'; // Tu componente principal

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Envuelve tu App con Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);