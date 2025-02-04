import React from 'react';
import LoginPage from './Pages/LoginPage';
import UserPage from './Pages/UserPage';
import SellerPage from './Pages/SellerPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/seller" element={<SellerPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
