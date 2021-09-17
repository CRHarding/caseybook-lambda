import React, { useState } from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';

import Header from './Components/Header/Header';

const alphaUser = {
  name: {
    first: "Casey",
    last: "Harding"
  },
  email: "case@case.com",
  login: {
    username: "CRHarding",
    uuid: "1234abcd"
  },
  picture: {
    medium: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555925330/shape/mentalfloss/thor.jpg?itok=mjGxZSbN"
  }
}

function App() {
  const [user, setUser] = useState(alphaUser);

  return (
    <div className="App">
      <Header />
      <h1>CaseyBook</h1>
      <h3>It's like Facebook, only made by a guy named Casey</h3>
      <h4>{user.name.first} {user.name.last}</h4>
      <h4>{user.login.username}</h4>
      <img src={user.picture.medium} alt="thor, the thunder god" />
    </div>
  );
}

export default App;
