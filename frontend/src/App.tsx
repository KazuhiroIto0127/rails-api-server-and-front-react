import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'login'} element={<LoginPage />} />
        <Route path={'/myPage'} element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
