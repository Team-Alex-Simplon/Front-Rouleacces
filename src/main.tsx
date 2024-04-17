import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Obtenez le token de votre source de données (localStorage, context, etc.)
const token = 'your_token_value';

ReactDOM.render(
  <React.StrictMode>
    <App token={token} />
  </React.StrictMode>,
  document.getElementById('root')
);
