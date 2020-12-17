const TeacherAPI = {
  teachers: [
    {
      path: 'bundash',
      name: 'Кароліна Бундаш',
      photo: 'https://i.imgur.com/XsOcB6o.jpg',
      profession: 'Художниця',
      technique: 'Акварель',
      city: 'м. Рівне',
      description:
        'Акварелістка, авторка курсів та художніх марафонів. Працює у техніці а ля пріма.',
      works: {
        img1: 'https://i.imgur.com/AH3Y5u9.jpg',
        img2: 'https://i.imgur.com/WA0omzO.jpg',
        img3: 'https://i.imgur.com/LK3RIV7.jpg',
        img4: 'https://i.imgur.com/dtiv2FW.jpg',
      },
    },
    { path: 'promska', name: 'Олександра Промська', position: 'D' },
    { path: 'sam', name: 'Sam Sweeper', position: 'D' },
    { path: 'matt', name: 'Matt Midfielder', position: 'M' },
    { path: 'william', name: 'William Winger', position: 'M' },
    { path: 'fillipe', name: 'Fillipe Forward', position: 'F' },
  ],
  all: function () {
    return this.teachers;
  },
  get: function (path) {
    const isTeacher = (p) => p.path === path;
    return this.teachers.find(isTeacher);
  },
};

export default TeacherAPI;
