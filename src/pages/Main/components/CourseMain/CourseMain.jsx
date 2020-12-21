import React from 'react';
import card_info from '../../../../MOCKS/card_info_MOCK';
import MainTitle from '../../../../components/Title';
import Button from '../../../../components/Button';
import CourseCardViewerForMain from '../../../../components/CourseCard';
import styles from './CourseMain.module.scss';
import PropTypes from 'prop-types';

const CourseMain = (props) => {
  return (
    <section className={styles.main_courses}>
      <MainTitle title="курси" subtitle="нові уроки" />
      <CourseCardViewerForMain
        card_info={card_info.filter((card, index) => index <= 5)} likes={props.likes} setLikes={props.setLikes}
        buy={props.buy} setBuy={props.setBuy}
      />
      <div className={styles.mainCourses_buttonWrapper}>
        <Button text="до каталогу" />
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
