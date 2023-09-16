import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [zooms, setZoom] = useState(15)

  let zoom = (input) => {
    if (input > 1600) { return 2 }
    else if (input > 800) { return 3 }
    else if (input > 350) { return 4 }
    else if (input > 160) { return 5 }
    else if (input > 80) { return 6 }
    else if (input > 40) { return 7 }
    else if (input > 20) { return 8 }
    else if (input > 10) { return 9 }
    else if (input > 4) { return 10 }
    else if (input > 2) { return 11 }
    else { return 15 }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={(e) => {e.preventDefault();
          setZoom(zoom(document.getElementById('cars').value))}}>
          <label>Select Distance:</label>
          <select name="cars" id="cars">
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
          </select>
          <input type="submit" value="Submit" ></input>
        </form>

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
    &q=41.2565° N, 95.9345° W&zoom=${zooms}`}>
        </iframe>
      </header>
    </div>
  );
}

export default App;
