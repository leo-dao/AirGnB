const userData = [
  {
    userId: 'rdmUser1',
    name: 'Eddie',
    avatar: 'https://media.npr.org/assets/img/2020/10/14/gettyimages-593327767_wide-4cd62ef34dcd35fe1f87bcbc0cbf3553a76e260f.jpg?s=1400'
  },
  {
    userId: 'rdmUser2',
    name: 'Default',
    avatar: 'https://image.flaticon.com/icons/png/512/51/51256.png'   // default avatar (?)
  },
  {
    userId: 'rdmUser3',
    name: 'Guy',
    avatar: 'https://thumbs.dreamstime.com/b/baker-19036306.jpg'
  },
];

const adData = [
  {
    adId: "rdmAd1",
    adImage: 'https://4.bp.blogspot.com/-J-SmOB1Uies/VkTOrGC85_I/AAAAAAAALzM/JbX1QviXISk/s1600/7751573280_972e14439d_o.jpg',
    title: 'Kramer',
    description: '80s Kramer',
    user: userData[0]
  },
  {
    adId: "rdmAd2",
    adImage: 'https://www.pourlesmusiciens.com/medias/400/evh-5150iii-50w-head-el34-black-large-136531.jpg',
    title: 'EVH amp head',
    description: 'EVH 5150III 50W EL34 Head',
    user: userData[0]
  },
  {
    adId: "rdmAd3",
    adImage: 'https://images.reverb.com/image/upload/s--civpv2Xy--/f_auto,t_large/v1626918495/cdpdune8sut5d29lm5sf.jpg',
    title: 'Distortion pedal',
    description: 'Ibanez tube screamer, barely used',
    user: userData[1],
  },
  {
    adId: "rdmAd4",
    adImage: 'https://thumbs.dreamstime.com/b/french-baguette-human-hand-17973182.jpg',
    title: 'Sticks',
    description: 'Fresh drum sticks, a bit fragile but perform fine for any style',
    user: userData[2]
  },
  {
    adId: "rdmAd5",
    adImage: 'https://www.pourlesmusiciens.com/medias/400/evh-5150iii-50w-head-el34-black-large-136531.jpg',
    title: 'EVH amp head',
    description: 'EVH 5150III 50W EL34 Head',
    user: userData[0]
  },
  {
    adId: "rdmAd6",
    adImage: 'https://i.ytimg.com/vi/S3ge0Yp132M/maxresdefault.jpg',
    title: 'DX7 synth',
    description: 'Vintage DX7 digitial synthesiser',
    user: userData[1],
  }
];

export { userData, adData };