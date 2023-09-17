import React from 'react';
// eslint-disable-next-line
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-gbyvd7qxdl22rxt8.us.auth0.com"
    clientId="P1MWmaLKD4MNhTa3DpIm3uq9U5w3S3K9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
