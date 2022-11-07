import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Home from './components/Pages/Home';
import Listings from './components/Pages/Listings';
import Header from './components/Organisms/Header';
import Footer from './components/Organisms/Footer';
import AdProfile from './components/Pages/AdProfile';
import UserProfile from './components/Pages/UserProfile';
import Error from './components/Molecules/Error';
import PostAd from './components/Pages/PostAd';
import BookAd from './components/Pages/BookAd';
import UserAccount from './components/Pages/UserAccount';
import LeaserInfo from './components/Pages/LeaserInfo';
import RenterInfo from './components/Pages/RenterInfo';

const Sitemask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 10;
    display: none;
`;


function App() {

  return (
    <div className="App">
      <Sitemask id='sitemask' />
      <Header />
      <Routes>
        <Route path="/"
          element={<Home />} />
        <Route path="/listings"
          element={<Listings />} />
        <Route path="/profile/:userId"
          element={<UserProfile />} />
        <Route path="/account-settings"
          element={<UserAccount />} />
        <Route path="/listings/:_id"
          element={<AdProfile />} />
        <Route path="/post-ad"
          element={<PostAd />} />
        <Route path="/booking/:_id+:startDate+:endDate"
          element={<BookAd />} />
        <Route path="/leaser-info"
          element={<LeaserInfo />} />
        <Route path="/renter-info"
          element={<RenterInfo />} />
        <Route path="*"
          element={<Error msg="" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;