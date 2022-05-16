const userData = [
  {
    userId: 'rdmUser1',
    name: 'Eddie',
    avatar: 'https://media.npr.org/assets/img/2020/10/14/gettyimages-593327767_wide-4cd62ef34dcd35fe1f87bcbc0cbf3553a76e260f.jpg?s=1400',
    numAds: 3,
  },
  {
    userId: 'rdmUser2',
    name: 'Default',
    avatar: 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png',   // default avatar (?)
    numAds: 2,
  },
  {
    userId: 'rdmUser3',
    name: 'Guy',
    avatar: 'https://thumbs.dreamstime.com/b/baker-19036306.jpg',
    numAds: 1,
  },
  {
    userId: 'rdmUser4',
    name: 'Stevie',
    avatar: 'https://townsquare.media/site/295/files/2018/12/SRV-Annamaria-DiSanto-Getty-Im.jpg',
    numAds: 1,
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
    title: 'Kramer',
    description: '80s Kramer',
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
    title: 'Distortion pedal',
    description: 'Ibanez tube screamer, barely used',
    user: userData[1],
  },
  {
    adId: "rdmAd4",
    adImages: [
      {
        img: 'https://thumbs.dreamstime.com/b/french-baguette-human-hand-17973182.jpg',
        imgId: 'rdmImg5'
      },
    ],
    title: 'Sticks',
    description: 'Fresh drum sticks, a bit fragile but perform fine for any style',
    user: userData[2]
  },
  {
    adId: "rdmAd5",
    adImages: [
      {
        img: 'https://www.pourlesmusiciens.com/medias/400/evh-5150iii-50w-head-el34-black-large-136531.jpg',
        imgId: 'rdmImg6'
      },
    ],
    title: 'EVH amp head',
    description: 'EVH 5150III 50W EL34 Head',
    user: userData[0]
  },
  {
    adId: "rdmAd6",
    adImages: [
      {
        img: 'https://i.ytimg.com/vi/S3ge0Yp132M/maxresdefault.jpg',
        imgId: 'rdmImg7'
      },
    ],
    title: 'DX7',
    description: 'Vintage DX7 digitial synthesiser',
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
    title: 'SRV Fender Stratocaster',
    description: '3 single coil guitar with 21 jumbro frets, maple neck, and rosewood fretboard. Gold plated hardware featuring a left-handed tremolo.',
    user: userData[3],
  }
];

export { userData, adData };