import React from 'react';
import AdCardList from './components/AdCardList';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import UserProfile from './components/UserProfile';

const data = [
  {
    adImage: 'https://4.bp.blogspot.com/-J-SmOB1Uies/VkTOrGC85_I/AAAAAAAALzM/JbX1QviXISk/s1600/7751573280_972e14439d_o.jpg',
    title: 'Kramer',
    description: '80s Kramer',
    user: {
      id: 'rdm1',
      avatar: 'https://media.npr.org/assets/img/2020/10/14/gettyimages-593327767_wide-4cd62ef34dcd35fe1f87bcbc0cbf3553a76e260f.jpg?s=1400'
    },
  },
  {
    adImage: 'https://images.reverb.com/image/upload/s--civpv2Xy--/f_auto,t_large/v1626918495/cdpdune8sut5d29lm5sf.jpg',
    title: 'Distortion pedal',
    description: 'Ibanez tube screamer, barely used',
    user: {
      id: 'rdm2',
      avatar: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t31.18172-8/22051048_133610940705556_3224786438101278390_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9p34xj5851YAX_twRri&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_oi-XPyEnf2wgn9gi8MhSpZoyEj7NuztrNgLLRsn9S7g&oe=620CDBE0'
    },
  },
  {
    adImage: 'https://thumbs.dreamstime.com/b/french-baguette-human-hand-17973182.jpg',
    title: 'Sticks',
    description: 'Fresh drum sticks, a bit fragile but perform fine for any style',
    user: {
      id: 'rdm3',
      avatar: 'https://thumbs.dreamstime.com/b/baker-19036306.jpg'
    },
  }
];


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/catalog" element={<AdCardList data={data} />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
    </div >
  );
}

export default App;
