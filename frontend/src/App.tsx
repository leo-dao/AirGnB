import React from 'react';
import Home from './components/Home';
import AdCardList from './components/AdCardList';
import Header from './components/Header';
import AdProfile from './components/AdProfile';
import { Routes, Route, Link } from "react-router-dom";
import UserProfile from './components/UserProfile';
import { userData, adData } from "./fakeData"
import LogIn from './components/Buttons/LogIn';
import SignUp from './components/Buttons/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<AdCardList data={adData} />} />
        <Route path="/profile/:userId" element={<UserProfile data={userData} />} />
        <Route path="/catalog/:adId" element={<AdProfile data={adData} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div >
  );
}

export default App;
