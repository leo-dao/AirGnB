const userData = [
  {
    userId: 'rdmUser1',
    name: 'Eddie',
    avatar: 'https://media.npr.org/assets/img/2020/10/14/gettyimages-593327767_wide-4cd62ef34dcd35fe1f87bcbc0cbf3553a76e260f.jpg?s=1400',
    rating: 5,
    numRatings: 5150,
    location: "LA",
  },
  {
    userId: 'rdmUser2',
    name: 'Default',
    avatar: 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png',
    rating: 2.5,
    numRatings: 1,
    location: 'Paris',
  },
  {
    userId: 'rdmUser4',
    name: 'Stevie',
    avatar: 'https://townsquare.media/site/295/files/2018/12/SRV-Annamaria-DiSanto-Getty-Im.jpg',
    rating: 4.5,
    numRatings: 89,
    location: 'Texas'
  }
];

const adData = [
  {
    adId: "rdmAd1",
    adImages: [
      {
        img: 'https://4.bp.blogspot.com/-J-SmOB1Uies/VkTOrGC85_I/AAAAAAAALzM/JbX1QviXISk/s1600/7751573280_972e14439d_o.jpg',
        imgId: 'rdmImg1'
      },
    ],
    title: 'Kramer with floyd rose',
    description: '80s Kramer, played by Alex Van Halen',
    price: 100,
    user: userData[0]
  },
  {
    adId: "rdmAd2",
    adImages: [
      {
        img: 'https://www.pourlesmusiciens.com/medias/400/evh-5150iii-50w-head-el34-black-large-136531.jpg',
        imgId: 'rdmImg2'
      },
    ],
    title: 'EVH amp head',
    description: 'EVH 5150III 50W EL34 Head',
    price: 100,
    user: userData[0]
  },
  {
    adId: "rdmAd3",
    adImages: [
      {
        img: 'https://media.sweetwater.com/api/i/q-82__ha-a5b2f4b2a4a1bdee__hmac-f87fba3adfb3fc12edf68121c043caaf34e0fee6/images/items/750/TS9-large.jpg',
        imgId: 'rdmImg3'
      },
      {
        img: 'https://sc1.musik-produktiv.com/pic-003470039xl/ibanez-ts9-tube-screamer.jpg',
        imgId: 'rdmImg4'
      },
    ],
    title: 'Ibanez tube screamer',
    description: 'Ibanez tube screamer, can be used as overdrive or distortion',
    price: 20,
    user: userData[1],
  },
  {
    adId: "rdmAd6",
    adImages: [
      {
        img: 'https://i.ytimg.com/vi/S3ge0Yp132M/maxresdefault.jpg',
        imgId: 'rdmImg7'
      },
    ],
    title: 'Vintage DX7 digitial synthesiser',
    description: 'Vintage DX7 digitial synthesiser',
    price: 50,
    user: userData[1],
  },
  {
    adId: "rdmAd7",
    adImages: [
      {
        img: 'https://www.fmicassets.com/Damroot/ZoomJpg/10002/0109200800_gtr_frt_001_rr.jpg',
        imgId: 'rdmImg8'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0956/3980/products/0109200800_gtr_frtbdydtl_001_nr_2400x2058.png?v=1515599594',
        imgId: 'rdmImg9'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Fendersrvstratfront.jpg',
        imgId: 'rdmImg10'
      },
    ],
    title: 'SRV Fender Stratocaster Texas edition',
    description: '3 single coil guitar with 21 jumbro frets, maple neck, and rosewood fretboard. Gold plated hardware featuring a left-handed tremolo',
    price: 250,
    user: userData[2],
  }
];

export { userData, adData };