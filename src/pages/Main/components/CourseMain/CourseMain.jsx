import React from 'react';
import card_info from "../../../../components/card_info_obj";
import MainTitle from "../../../../components/Title";
import Button from "../../../../components/Button";
import CourseCardViewerForMain from '../../../../components/CourseCard';
import styles from './CourseMain.module.scss'

const CourseMain = () => {
  return (
    // <div>
      <section className={styles.main_courses}>
        <MainTitle title="курси" subtitle="нові уроки"/>
        <CourseCardViewerForMain card_info={card_info} />
        <div className={styles.mainCourses_buttonWrapper}><Button text="до каталогу"/></div>
      </section>
    // </div>
  );
};

export default CourseMain