import React from 'react';
import PropTypes from 'prop-types';
import TeacherAPI from '../../MOCKS/TeacherAPI';
import card_info from '../../MOCKS/card_info_MOCK';
import CourseCardViewerForMain from '../../components/CourseCard';
import Slider from 'react-slick';
import styles from './ArtistsPersonalPage.module.scss';
import '../../components/css_modules/slider.scss';
import Title from '../../components/TitleOnly';
import Breadcrumb from '../../components/Breadcrumb';
// import ArtistPersonalSlider from './ArtistPersonalSlider';

const ArtistPersonalPage = (props) => {
  const teacher = TeacherAPI.get(props.match.params.path);

  const sliderWorks = Object.keys(teacher.works).map(function (key) {
    return (
      <div key={key.index}>
        <div className={styles.teacherCard__wrapper}>
          <div
            className={`${styles.teacherCard__component} teacherCard__personalSlider`}
          >
            <div className={styles.teacherCard__photo_wrapper}>
              <img
                className={styles.teacherCard__photo}
                src={teacher.works[key]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  if (!teacher) {
    return <div>Sorry, but the teacher was not found</div>;
  }
  return (
    <div className={styles.artistsContainer}>
      <Breadcrumb
        main_menu_item="Викладачі"
        technique_or_teacher={teacher.name}
      />
      <div className={styles.authorTitleWrapper}>
        <Title title={teacher.profession} subtitle={teacher.name} />
      </div>
      <div className={styles.artistContainer}>
        <div>
          <img src={teacher.photo} className={styles.teacherCard__photo} />
        </div>
        <div className={styles.artistInfo}>
          <p>{teacher.profession}</p>
          <p>{teacher.technique}</p>
          <p className={styles.artistInfoCity}>{teacher.city}</p>
          <p>{teacher.description}</p>
        </div>
      </div>
      <div className={styles.titleForSlider}>Роботи</div>
      <Slider {...settings}>{sliderWorks}</Slider>
      <div className={styles.authorCourseTitleWrapper}>
        <Title title="Мої" subtitle="Курси" />
      </div>
      <CourseCardViewerForMain
        card_info={card_info.filter(
          (card) => card.author.name === teacher.name
        )}
      />
    </div>
  );
};

ArtistPersonalPage.propTypes = {
  match: PropTypes.string,
};

export default ArtistPersonalPage;
