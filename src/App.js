import React from 'react';
import './index.css';
import { useAuth0 } from "@auth0/auth0-react";
import {useState} from 'react';
import Profile from './profile';
import LogoutButton from './logout';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

function App() {
  // eslint-disable-next-line
  const { loginWithRedirect } = useAuth0();
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
      <div class="bg-yellow-200 ">
        <header class="bg-yellow">
        <h1 class="text-3xl font-bold underline p-10 top-100">
          Discount Hub!
        </h1>
        <form class=""onSubmit={(e) => {e.preventDefault();
          setZoom(zoom(document.getElementById('cars').value))}}>
          <label class="px-5">Select Distance:</label>
          <select class="rounded-lg px-2"name="cars" id="cars">
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
          <input class="px-1 text-black bg-white rounded-md text-xs"type="submit" value="Submit"></input>
        </form>

          <iframe
            class="rounded-lg absolute bottom-5 left-5"
            title='hub'
            width="300"
            height="300"
            style={{ border: '0' }}
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQpMrPDGqnMNwlTIfRA63ghbPn3O_UBTw&q=41.2565° N, 95.9345° W&zoom=${zooms}`}>
          </iframe>
          <LoginButton class="px-5 text-black bg-white rounded-md text-xs" />
          <Profile class="absolute top-0 right-0 bg-black"/>
          <LogoutButton />
        </header>
      </div>
    );
}

export default App;
