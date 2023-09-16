import logo from './logo.svg';
import './App.css';

function App() {

  let zoom = (input) => {
    if (input > 1600) { return 2 }
    else if (input > 800) {return 3 }
    else if (input > 350) { return 4 }
    else if (input > 160) {return 5 }
    else if (input > 80) {return 6 }
    else if (input > 40) {return 7 }
    else if (input > 20) {return 8 }
    else if (input > 10) {return 9 }
    else if (input > 4) { return 10 }
    else if (input > 2) { return 11}
    else { return 15 }
  }

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
          title='hub'
          width="600"
          height="450"
          style={{ border: '0' }}
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_SECRET_CODE}
    &q=41.2565° N, 95.9345° W&zoom=3`}>
        </iframe>
      </header>
    </div>
  );
}

export default App;
