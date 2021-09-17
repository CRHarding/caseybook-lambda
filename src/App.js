import React, { useState } from 'react';
import './App.css';

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
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
