import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    fetch('/api/sessions', { method: 'POST', credentials: 'include' })
      .then(response => {
        if(response.ok) {
          navigation('/myPage');
        } else {
          console.log('Login failed');
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};

export default LoginPage;
