import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MyPage = () => {
  const navigation = useNavigate();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetch('/api/sessions', { method: 'GET', credentials: 'include' })
      .then(response =>{
        if(response.ok) {
          return response.json();
        } else{
          navigation('/login')
        }
      })
      .then(data => setUserId(data?.user_id));
  });

  return (
    <div style={{ padding: "10px" }}>
      <Navigation />
      <h2>My page</h2>
      <p>{userId ? userId : ''}</p>
    </div>
  );
};

export default MyPage;
