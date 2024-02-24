import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    fetch('/api/sessions', { method: 'GET', credentials: 'include' })
      .then(response =>{
        if(response.ok) {
          return response.json();
        } else{
          navigation('/login')
        }
      })
      .then(data => console.log(data));
  });

  return (
    <div>
      <h2>My page</h2>
    </div>
  );
};

export default MyPage;
