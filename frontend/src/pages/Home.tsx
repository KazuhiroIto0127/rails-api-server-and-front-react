import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

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
      <Navigation />
      <h1>Response from Api</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

