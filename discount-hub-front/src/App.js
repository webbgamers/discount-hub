import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

// export default LoginButton;

function App() {
  const { loginWithRedirect } = useAuth0();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <iframe
            width="600"
            height="450"
            style={{border: '0'}}
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?{API_KEY}
      &q=Space+Needle,Seattle+WA">
          </iframe>
          <LoginButton />
        </header>
      </div>
    );
}
export default App;
