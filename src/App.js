import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import DonationRequest from './components/DonationRequest/DonationRequest';
import Login from './components/Login/Login';
import CommunityBoard from './components/CommunityBoard/CommunityBoard';
import Profile from './components/Profile/Profile';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [loginAccess, setLoginAccess] = useState(false)
  
  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage setLoginAccess={setLoginAccess}/>}/>
          <Route path="donation-request" element={<DonationRequest/>}/>
          <Route path='community-board' element={<CommunityBoard/>}/>
          <Route path='profile' element={<Profile loginAccess={loginAccess} setLoginAccess={setLoginAccess} />}/>
          <Route path="login-form" element={<Login setLoginAccess={setLoginAccess} loginAccess={loginAccess}  />}/>
      </Routes>
   </>  
  );
}


export default App;
