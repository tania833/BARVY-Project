const card_info = [
  {
    id: 1,
    img: {
      url: 'https://i.imgur.com/MARQEkA.jpg',
    },
    author: {
      name: 'Наталія Серветник',
      technique: 'Пастель',
      course_format: 'відео курс',
    },
    title: 'Натюрморт з яблуками',
    price: '500',
  },
  {
    id: 2,
    img: {
      url: 'https://i.imgur.com/7ZW70YI.jpg',
    },
    author: {
      name: 'Павло Бенедюк',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Нічний музей',
    price: '500',
  },
  {
    id: 3,
    img: {
      url: 'https://i.imgur.com/mHfA16u.jpg',
    },
    author: {
      name: 'Христина Стринадюк',
      technique: 'Акварель',
      course_format: 'відео курс',
    },
    title: 'Основи акварельної техніки',
    price: '500',
  },
  {
    id: 4,
    img: {
      url: 'https://i.imgur.com/MUh3laI.jpg',
    },
    author: {
      name: 'Христина Стринадюк',
      technique: 'Акварель',
      course_format: 'відео курс',
    },
    title: 'Вечірній пейзаж з озером',
    price: '500',
  },
  {
    id: 5,
    img: {
      url: 'https://i.imgur.com/F0sEyuY.jpg',
    },
    author: {
      name: 'Наталя Серветник',
      technique: 'Акварель',
      course_format: 'відео курс',
    },
    title: 'Маки',
    price: '500',
  },
  {
    id: 6,
    img: {
      url: 'https://i.imgur.com/qnTlNpU.jpg',
    },
    author: {
      name: 'Степан Карпюк',
      technique: 'Акварель',
      course_format: 'відео курс',
    },
    title: 'Яхти в Іспанії',
    price: '500',
  },
  {
    id: 7,
    img: {
      url: 'https://i.imgur.com/aSw2ITP.jpg',
    },
    author: {
      name: 'Антон Філик',
      technique: 'Ілюстрація',
      course_format: 'урок',
    },
    title: 'Портрет Вуді Алена',
    price: '500',
  },
  {
    id: 8,
    img: {
      url: 'https://i.imgur.com/6r4tTyM.jpg',
    },
    author: {
      name: 'Олександр Бобришев',
      technique: 'Акварель',
      course_format: 'відео курс',
    },
    title: 'Портрет дівчинки',
    price: '500',
  },
  {
    id: 9,
    img: {
      url: 'https://i.imgur.com/6uMeU5o.jpg',
    },
    author: {
      name: 'Олександр Бобришев',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Зимовий пейзаж',
    price: '500',
  },
  {
    id: 10,
    img: {
      url: 'https://i.imgur.com/33VFcBv.jpg',
    },
    author: {
      name: 'Наталя Серветник',
      technique: 'Пастель',
      course_format: 'відео курс',
    },
    title: 'Кролик',
    price: '500',
  },
  {
    id: 11,
    img: {
      url: 'https://i.imgur.com/I8gR2OB.jpg',
    },
    author: {
      name: 'Наталія Серветник',
      technique: 'Пастель',
      course_format: 'урок',
    },
    title: 'Фламенко',
    price: '500',
  },
  {
    id: 12,
    img: {
      url: 'https://i.imgur.com/9zZ4Dhx.jpg',
    },
    author: {
      name: 'Наталя Серветник',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Гарбузи',
    price: '400',
  },
  {
    id: 13,
    img: {
      url: 'https://i.imgur.com/Pf2lkOR.jpg',
    },
    author: {
      name: 'Павло Бенедюк',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Етюд з Балчика',
    price: '400',
  },
  {
    id: 14,
    img: {
      url: 'https://i.imgur.com/N1UT7Gv.jpg',
    },
    author: {
      name: 'Олександр Бобришев',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Весна на дачі',
    price: '500',
  },
  {
    id: 15,
    img: {
      url: 'https://i.imgur.com/AH3Y5u9.jpg',
    },
    author: {
      name: 'Кароліна Бундаш',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Портрет дівчини',
    price: '500',
  },
  {
    id: 16,
    img: {
      url: 'https://i.imgur.com/OOyg8xx.jpg',
    },
    author: {
      name: 'Христина Стринадюк',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Карпатський пейзаж',
    price: '500',
  },
  {
    id: 17,
    img: {
      url: 'https://i.imgur.com/29LsTLp.jpg',
    },
    author: {
      name: 'Олександра Промська',
      technique: 'Ілюстрація',
      course_format: 'урок',
    },
    title: 'Дівчата',
    price: '500',
  },
  {
    id: 18,
    img: {
      url: 'https://i.imgur.com/rdMFzYe.jpg',
    },
    author: {
      name: 'Павло Бенедюк',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Яхти в Іспанії',
    price: '350',
  },
  {
    id: 19,
    img: {
      url: 'https://i.imgur.com/dskboRm.jpg',
    },
    author: {
      name: 'Степан Карпюк',
      technique: 'Акварель',
      course_format: 'відео курс',
    },
    title: 'Будинок за містом',
    price: '500',
  },
  {
    id: 20,
    img: {
      url: 'https://i.imgur.com/VlIy1Aa.jpg',
    },
    author: {
      name: 'Христина Стринадюк',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Сільська хата',
    price: '500',
  },
  {
    id: 21,
    img: {
      url: 'https://i.imgur.com/LK3RIV7.jpg',
    },
    author: {
      name: 'Кароліна Бундаш',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Портрет дівчини',
    price: '500',
  },
  {
    id: 22,
    img: {
      url: 'https://i.imgur.com/BgiyVfK.jpg',
    },
    author: {
      name: 'Наталя Брічук',
      technique: 'Графіка',
      course_format: 'урок',
    },
    title: 'Абстракція. Портрет',
    price: '500',
  },
  {
    id: 23,
    img: {
      url: 'https://i.imgur.com/IVajb9r.jpg',
    },
    author: {
      name: 'Наталя Серветник',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Іриси',
    price: '300',
  },
  {
    id: 24,
    img: {
      url: 'https://i.imgur.com/hZsqj2a.jpg',
    },
    author: {
      name: 'Христина Стринадюк',
      technique: 'Акварель',
      course_format: 'урок',
    },
    title: 'Гранати',
    price: '300',
  },
  {
    id: 25,
    img: {
      url: 'https://i.imgur.com/qGAkfK2.jpg',
    },
    author: {
      name: 'Олександра Промська',
      technique: 'Діджитал',
      course_format: 'відео курс',
    },
    title: 'Ілюстрація. Вступ',
    price: '500',
  },
  {
    id: 26,
    img: {
      url: 'https://i.imgur.com/f479PCr.jpg',
    },
    author: {
      name: 'Олександра Промська',
      technique: 'Діджитал',
      course_format: 'урок',
    },
    title: 'Обійми',
    price: '500',
  },
  {
    id: 27,
    img: {
      url: 'https://i.imgur.com/EXHIMUW.jpg',
    },
    author: {
      name: 'Олександра Промська',
      technique: 'Діджитал',
      course_format: 'відео курс',
    },
    title: 'Портрети',
    price: '500',
  },
  {
    id: 28,
    img: {
      url: 'https://i.imgur.com/RLxHTgI.jpg',
    },
    author: {
      name: 'Олександра Промська',
      technique: 'Діджитал',
      course_format: 'відео курс',
    },
    title: 'Сюжетна ілюстрація',
    price: '450',
  },
  {
    id: 29,
    img: {
      url: 'https://i.imgur.com/L9O1pGy.jpg',
    },
    author: {
      name: 'Олександра Промська',
      technique: 'Ілюстрація',
      course_format: 'урок',
    },
    title: 'Друзі',
    price: '400',
  },
  {
    id: 30,
    img: {
      url: 'https://i.imgur.com/jIZhVxP.jpg',
    },
    author: {
      name: 'Олександра Промська',
      technique: 'Діджитал',
      course_format: 'відео курс',
    },
    title: 'Сюжетна ілюстрація',
    price: '450',
  },
  {
    id: 31,
    img: {
      url: 'https://i.imgur.com/dY768q2.jpg',
    },
    author: {
      name: 'Антон Філик',
      technique: 'Діджитал',
      course_format: 'урок',
    },
    title: 'Параджанов',
    price: '500',
  },
  {
    id: 32,
    img: {
      url: 'https://i.imgur.com/azqH19y.jpg',
    },
    author: {
      name: 'Антон Філик',
      technique: 'Діджитал',
      course_format: 'Курс лекцій',
    },
    title: 'Ілюстрація для книги',
    price: '500',
  },
  {
    id: 33,
    img: {
      url: 'https://i.imgur.com/sU4BbqC.jpg',
    },
    author: {
      name: 'Наталя Брічук',
      technique: 'Фотографія',
      course_format: 'урок',
    },
    title: 'Цікаві рішення для портретів',
    price: '350',
  },
  {
    id: 34,
    img: {
      url: 'https://i.imgur.com/8DU4cZq.jpg',
    },
    author: {
      name: 'Наталя Серветник',
      technique: 'Пастель',
      course_format: 'урок',
    },
    title: 'Осінні квіти',
    price: '400',
  },
  {
    id: 35,
    img: {
      url: 'https://i.imgur.com/3LJtFC8.jpg',
    },
    author: {
      name: 'Павло Бенедюк',
      technique: 'Рисунок',
      course_format: 'урок',
    },
    title: 'Побудова кисті руки',
    price: '450',
  },
  {
    id: 36,
    img: {
      url: 'https://i.imgur.com/p2O0ndF.jpg',
    },
    author: {
      name: 'Наталя Брічук',
      technique: 'Фотографія',
      course_format: 'урок',
    },
    title: 'Зйомка в інтер`єрі',
    price: '500',
  },
  {
    id: 37,
    img: {
      url: 'https://i.imgur.com/IL4KTR8.jpgg',
    },
    author: {
      name: 'Павло Бенедюк',
      technique: 'Рисунок',
      course_format: 'урок',
    },
    title: 'Рисунок фігур',
    price: '300',
  },
  {
    id: 38,
    img: {
      url: 'https://i.imgur.com/CsePcyb.jpg',
    },
    author: {
      name: 'Наталя Брічук',
      technique: 'Фотографія',
      course_format: 'урок',
    },
    title: 'Портрети',
    price: '400',
  },
  {
    id: 39,
    img: {
      url: 'https://i.imgur.com/fC68Wpl.jpg',
    },
    author: {
      name: 'Павло Бенедюк',
      technique: 'Рисунок',
      course_format: 'урок',
    },
    title: 'Голова чоловіка',
    price: '500',
  },
  {
    id: 40,
    img: {
      url: 'https://i.imgur.com/n1HjMMb.jpg',
    },
    author: {
      name: 'Павло Бенедюк',
      technique: 'Рисунок',
      course_format: 'урок',
    },
    title: 'Голова. Побудова перспективи',
    price: '500',
  },
  {
    id: 41,
    img: {
      url: 'https://i.imgur.com/BxCdO5g.jpg',
    },
    author: {
      name: 'Наталя Серветник',
      technique: 'Пастель',
      course_format: 'урок',
    },
    title: 'Храм',
    price: '350',
  },
];

export default card_info;
