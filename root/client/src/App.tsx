import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home';
import Catalog from './components/Pages/Catalog';
import Header from './components/Organisms/Header';
import AdProfile from './components/Pages/AdProfile';
import UserProfile from './components/Pages/UserProfile';
import { userData, adData } from "./fakeData"
import SignIn from './components/Molecules/SignIn';
import Register from './components/Molecules/Register';
import Error from './components/Molecules/Error';
import PostAd from './components/Pages/PostAd';
import BookAd from './components/Pages/BookAd';

import { User } from './interfaces';
import useGetUsers from './hooks/useGetUsers';

function App() {

  let users: User[] = useGetUsers();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"
          element={<Home />} />
        <Route path="/listings"
          element={<Catalog data={adData} />} />
        <Route path="/profile/:userId"
          element={<UserProfile users={users} ads={adData} />} />
        <Route path="/listings/:_id"
          element={<AdProfile data={adData} />} />
        <Route path="/post-ad"
          element={<PostAd />} />
        <Route path="/booking/:_id+:startDate+:endDate"
          element={<BookAd />} />
        <Route path="/sign-in"
          element={<SignIn />} />
        <Route path="/register"
          element={<Register />} />
        <Route path="*"
          element={<Error msg="" />} />
      </Routes>
    </div >
  );
}

export default App;