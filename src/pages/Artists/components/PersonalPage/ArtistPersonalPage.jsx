import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TeacherAPI from '../../../../MOCKS/TeacherAPI';
import card_info from '../../../../MOCKS/card_info_MOCK';
import CourseCardViewerForMain from '../../../../components/CourseCard';
import Slider from 'react-slick';
import styles from './ArtistsPersonalPage.module.scss';
import Title from '../../../../components/TitleOnly';
import Breadcrumb from '../../../../components/Breadcrumb';
import Page404 from '../../../404/page404';

const ArtistPersonalPage = (props) => {

  const [likes, setLikes] = useState([]);
  const [buy, setBuy] = useState([]);

  const teacher = TeacherAPI.get(props.match.params.path);

  const sliderWorks = Object.keys(teacher.works).map((key) => {
    return (
      <div
        key={teacher.path}
        className={`${styles.teacherCard__wrapper} teacherCard__worksSlider3`}
      >
        <div
          className={`${styles.teacherCard__component} teacherCard__worksSlider2`}
        ></div>
        <div
          className={`${styles.teacherCard__photo_wrapper} teacherCard__worksSlider2`}
        >
          <img
            className={`${styles.teacherCard__photo} teacherCard__worksSlider1`}
            src={teacher.works[key]}
          />
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
    speed: 1000,
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

  if (teacher.personal_title === '') {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  let width = window.innerWidth;
  let breadcrumbs;
  if (width < 768) {
    breadcrumbs = '';
  } else {
    breadcrumbs = (
      <Breadcrumb
        main_menu_item="Викладачі"
        main_menu_item_link="/artists"
        technique_or_teacher={teacher.name}
        technique_or_teacher_link={`/artists/${teacher.path}`}
      />
    );
  }

  return (
    <div className={styles.artistsContainer}>
      {breadcrumbs}
      <div className={styles.authorTitleWrapper}>
        <Title title={teacher.personal_title} subtitle={teacher.name} />
      </div>
      <div className={styles.artistContainer}>
        <div>
          <img
            src={teacher.personal_photo}
            className={styles.teacherCard__photo}
          />
        </div>
        <div className={styles.artistInfo}>
          <p>{teacher.profession}</p>
          <p>{teacher.technique}</p>
          <p className={styles.artistInfoCity}>{teacher.city}</p>
          <p>{teacher.description}</p>
        </div>
      </div>
      <div className={styles.titleForSlider}>Роботи</div>
      <div id="sliderContainer" className={styles.sliderContainer}>
        <Slider {...settings}>{sliderWorks}</Slider>
      </div>
      <div className={styles.authorCourseTitleWrapper}>
        <Title title="Мої" subtitle="Курси" />
      </div>
      <div className={styles.cardWrapper}>
        <CourseCardViewerForMain
          card_info={card_info.filter(
            (card) => card.author.name === teacher.name
          )}
          likes={likes}
          setLikes={setLikes}
          buy={buy}
          setBuy={setBuy}
        />
      </div>
    </div>
  );
};

ArtistPersonalPage.propTypes = {
  match: PropTypes.object,
};

export default ArtistPersonalPage;
