import React from 'react';
import Home from './components/Pages/Home';
import Catalog from './components/Pages/Catalog';
import Header from './components/Organisms/Header';
import AdProfile from './components/Pages/AdProfile';
import { Routes, Route, Link } from "react-router-dom";
import UserProfile from './components/Pages/UserProfile';
import { userData, adData } from "./fakeData"
import SignIn from './components/Molecules/SignIn';
import Register from './components/Molecules/Register';
import Error from './components/Molecules/Error';
import LoginPage from './components/Pages/LoginPage';
import PostAd from './components/Pages/PostAd';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Catalog data={adData} />} />
        <Route path="/profile/:userId" element={<UserProfile data={userData} ads={adData} />} />
        <Route path="/listings/:adId" element={<AdProfile data={adData} />} />
        <Route path="/post-ad" element={<PostAd />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error msg="" />} />
      </Routes>
    </div >
  );
}

export default App;