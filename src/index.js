import React from 'react';
import ReactDOM from 'react-dom/client'; // Correctly imported for React 18+

import App from './App';
import { MyProvider } from './context';

// Correct way to use createRoot with the imported ReactDOM object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
