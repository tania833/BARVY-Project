import React from 'react';
import card_info from '../../../../MOCKS/card_info_MOCK';
import MainTitle from '../../../../components/Title';
import Button from '../../../../components/Button';
import CourseCardViewerForMain from '../../../../components/CourseCard';
import styles from './CourseMain.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseMain = (props) => {
  const width = window.innerWidth;
  let viewerForMain;
  if (width < 768 && width > 576) {
    viewerForMain = (
      <CourseCardViewerForMain
        card_info={card_info.filter((card, index) => index <= 3)}
        likes={props.likes}
        setLikes={props.setLikes}
      />
    );
  } else if (width <= 576) {
    viewerForMain = (
      <CourseCardViewerForMain
        card_info={card_info.filter((card, index) => index <= 2)}
        likes={props.likes}
        setLikes={props.setLikes}
      />
    );
  } else {
    viewerForMain = (
      <CourseCardViewerForMain
        card_info={card_info.filter((card, index) => index <= 5)} likes={props.likes} setLikes={props.setLikes}
        buy={props.buy} setBuy={props.setBuy}
      />
    );
  }
  return (
    <section className={styles.main_courses}>
      <MainTitle title="курси" subtitle="нові уроки" />
      {viewerForMain}
      <div className={styles.mainCourses_buttonWrapper}>
        <Link to="/techniques">
          <Button text="до каталогу" />
        </Link>
      </div>
    </section>
  );
};

CourseMain.propTypes = {
  likes: PropTypes.array,
  setLikes: PropTypes.function,
  buy: PropTypes.array,
  setBuy: PropTypes.function,
}

export default CourseMain;
