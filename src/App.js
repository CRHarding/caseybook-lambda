import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Users from './Components/Users/Users';

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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = await axios.get('https://randomuser.me/api/?results=5');
      setUsers(users.data.results);
    }

    getUsers();
  }, [])

  return (
    <div className="App">
      <Header />
      <h1>CaseyBook</h1>
      <h3>It's like Facebook, only made by a guy named Casey</h3>
      <Route path="/profile">
        <Profile user={user} />
      </Route>
      <Route path="/users">
        <Users users={users} />
      </Route>
    </div>
  );
}

export default App;
