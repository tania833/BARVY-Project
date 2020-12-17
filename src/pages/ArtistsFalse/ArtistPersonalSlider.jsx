import React from 'react';
import styles from '../Main/components/ArtistsMain/ArtistsMain.module.scss';
import '../../components/css_modules/slider.scss';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import TeacherAPI from '../../MOCKS/TeacherAPI';

const ArtistPersonalSlider = (props) => {
  const teacher = TeacherAPI.get(props.match.params.path);
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

  return (
    <Slider {...settings}>
      <div className={styles.teacherCard__wrapper}>
        <div
          className={`${styles.teacherCard__component} teacherCard__personalSlider`}
        >
          <p className={styles.teacherCard__photo_wrapper}>
            <img
              className={styles.teacherCard__photo}
              src={teacher.works.img1}
            />
          </p>
        </div>
      </div>
      <div className={styles.teacherCard__wrapper}>
        <div
          className={`${styles.teacherCard__component} teacherCard__personalSlider`}
        >
          <p className={styles.teacherCard__photo_wrapper}>
            <img
              className={styles.teacherCard__photo}
              src={teacher.works.img2}
            />
          </p>
        </div>
      </div>
      <div className={styles.teacherCard__wrapper}>
        <div
          className={`${styles.teacherCard__component} teacherCard__personalSlider`}
        >
          <p className={styles.teacherCard__photo_wrapper}>
            <img
              className={styles.teacherCard__photo}
              src={teacher.works.img3}
            />
          </p>
        </div>
      </div>
      <div className={styles.teacherCard__wrapper}>
        <div
          className={`${styles.teacherCard__component} teacherCard__personalSlider`}
        >
          <p className={styles.teacherCard__photo_wrapper}>
            <img
              className={styles.teacherCard__photo}
              src={teacher.works.img4}
            />
          </p>
        </div>
      </div>
    </Slider>
  );
};

ArtistPersonalSlider.propTypes = {
  match: PropTypes.string,
};

export default ArtistPersonalSlider;
