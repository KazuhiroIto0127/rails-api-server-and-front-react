import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => console.error('Fetching error: ', error));
  }, []);

  return (
    <div>
      <Link to="/login">login</Link>
      <br />
      <Link to="/myPage">myPage</Link>
      <h1>Response from Api</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

