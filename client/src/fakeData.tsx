const userData = [
  {
    _id: 'rdmUser1',
    name: 'Eddie',
    avatar: 'https://media.npr.org/assets/img/2020/10/14/gettyimages-593327767_wide-4cd62ef34dcd35fe1f87bcbc0cbf3553a76e260f.jpg?s=1400',
    rating: 5,
    numRatings: 5150,
    location: "Los Angeles, United States",
  },
  {
    _id: 'rdmUser2',
    name: 'Default',
    avatar: 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png',
    rating: 2.5,
    numRatings: 1,
    location: 'Paris, France',
  },
  {
    _id: 'rdmUser4',
    name: 'Stevie',
    avatar: 'https://townsquare.media/site/295/files/2018/12/SRV-Annamaria-DiSanto-Getty-Im.jpg',
    rating: 4.5,
    numRatings: 89,
    location: 'Albuquerque, Texas'
  }
];

const adData = [
  {
    _id: "rdmAd1",
    images: [
      {
        img: 'https://4.bp.blogspot.com/-J-SmOB1Uies/VkTOrGC85_I/AAAAAAAALzM/JbX1QviXISk/s1600/7751573280_972e14439d_o.jpg',
        _id: 'rdmImg1'
      },
    ],
    title: 'Kramer with floyd rose',
    description: '80s Kramer, played by Eddie Van Halen',
    category: 'Guitars',
    price: 100,
    user: userData[0]
  },
  {
    _id: "rdmAd2",
    images: [
      {
        img: 'https://www.pourlesmusiciens.com/medias/400/evh-5150iii-50w-head-el34-black-large-136531.jpg',
        _id: 'rdmImg2'
      },
    ],
    title: 'EVH amp head',
    description: 'EVH 5150III 50W EL34 Head',
    category: 'Amplifiers',
    price: 25,
    user: userData[0]
  },
  {
    _id: "rdmAd3",
    images: [
      {
        img: 'https://media.sweetwater.com/api/i/q-82__ha-a5b2f4b2a4a1bdee__hmac-f87fba3adfb3fc12edf68121c043caaf34e0fee6/images/items/750/TS9-large.jpg',
        _id: 'rdmImg3'
      },
      {
        img: 'https://sc1.musik-produktiv.com/pic-003470039xl/ibanez-ts9-tube-screamer.jpg',
        _id: 'rdmImg4'
      },
    ],
    title: 'Ibanez tube screamer',
    description: "Ibanez tube screamer, can be used as overdrive or distortion\nFeatures a lot of other cool stuff\nLike a lot\nHas 3 knobs as you can see which I think is really cool\nAnd the green is pretty slick in my opinion\nI believe there is more than that but I forgot",
    category: 'Effects',
    price: 20,
    user: userData[1],
  },
  {
    _id: "rdmAd6",
    images: [
      {
        img: 'https://i.ytimg.com/vi/S3ge0Yp132M/maxresdefault.jpg',
        _id: 'rdmImg7'
      },
    ],
    title: 'Vintage DX7 digitial synthesiser',
    description: 'Vintage DX7 digitial synthesiser\nPitch and modulation wheel on the right of the instrument, other tweaky knobs on the top\nBut thats pretty standard though I guess',
    category: 'Keyboards',
    price: 15,
    user: userData[1],
  },
  {
    _id: "rdmAd7",
    images: [
      {
        img: 'https://www.fmicassets.com/Damroot/ZoomJpg/10002/0109200800_gtr_frt_001_rr.jpg',
        _id: 'rdmImg8'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0956/3980/products/0109200800_gtr_frtbdydtl_001_nr_2400x2058.png?v=1515599594',
        _id: 'rdmImg9'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Fendersrvstratfront.jpg',
        _id: 'rdmImg10'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Fendersrvstratfront.jpg',
        _id: 'rdmImg10'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Fendersrvstratfront.jpg',
        _id: 'rdmImg10'
      },
    ],
    title: 'SRV Fender Stratocaster Texas edition',
    description: '3 single coil guitar with 21 jumbro frets, maple neck, and rosewood fretboard. Gold plated hardware featuring a left-handed tremolo\nSurvived a flood\nWas nicknamed after Stevies wife',
    category: 'Guitars',
    price: 30,
    user: userData[2],
  },
];

export { userData, adData };