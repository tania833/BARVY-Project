const TechAPI = {
  courses: [
    {
      path: 'watercolor',
      techTitle: 'Акварель',
      techImg: 'https://imgur.com/HDj2wyy.png',
    },
    {
      path: 'picture',
      techTitle: 'Рисунок',
      techImg: 'https://imgur.com/fC68Wpl.png',
    },
    {
      path: 'illustration',
      techTitle: 'Ілюстрація',
      techImg: 'https://imgur.com/70mHf8c.png',
    },
    {
      path: 'photography',
      techTitle: 'Фотографія',
      techImg: 'https://imgur.com/sU4BbqC.png',
    },
    {
      path: 'history_of_arts',
      techTitle: 'Історія Мистецтв',
      techImg: 'https://imgur.com/GQ4q46O.png',
    },
    {
      path: 'pastel',
      techTitle: 'Пастель',
      techImg: '',
    },
    {
      path: 'oil',
      techTitle: 'Олійний живопис',
      techImg: '',
    },
    {
      path: 'decor',
      techTitle: 'Декоративне',
      techImg: '',
    },
    {
      path: 'kids',
      techTitle: 'Дитяче',
      techImg: '',
    },
    {
      path: 'graphics',
      techTitle: 'Графіка',
      techImg: '',
    },
    {
      path: 'digital',
      techTitle: 'Діджитал',
      techImg: '',
    },
  ],
  all: function () {
    return this.courses;
  },
  get: function (path) {
    const isCourse = (c) => c.path === path;
    return this.courses.find(isCourse);
  },
};

export default TechAPI;
