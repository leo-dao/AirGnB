import React from 'react';
import Home from './components/Templates/Home';
import AdCardList from './components/Organisms/AdCardList';
import Header from './components/Organisms/Header';
import AdProfile from './components/Templates/AdProfile';
import { Routes, Route, Link } from "react-router-dom";
import UserProfile from './components/Templates/UserProfile';
import { userData, adData } from "./fakeData"
import SignIn from './components/Molecules/SignIn';
import Register from './components/Molecules/Register';
import Error from './components/Molecules/Error';

function App() {
  return (
    <div className="App" style={{

    }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<AdCardList data={adData} />} />
        <Route path="/profile/:userId" element={<UserProfile data={userData} />} />
        <Route path="/catalog/:adId" element={<AdProfile data={adData} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error msg="" />} />
      </Routes>
    </div >
  );
}

export default App;