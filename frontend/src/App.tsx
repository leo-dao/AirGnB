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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog data={adData} />} />
        <Route path="/profile/:userId" element={<UserProfile data={userData} ads={adData} />} />
        <Route path="/catalog/:adId" element={<AdProfile data={adData} />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error msg="" />} />
      </Routes>
    </div >
  );
}

export default App;