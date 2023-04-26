import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ItemsCartProvider } from "./contexts/ItemsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemsCartProvider>
      <App />
    </ItemsCartProvider>
  </React.StrictMode>
);


