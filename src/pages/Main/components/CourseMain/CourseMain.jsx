import React from 'react';
import card_info from '../../../../MOCKS/card_info_MOCK';
import MainTitle from '../../../../components/Title';
import Button from '../../../../components/Button';
import CourseCardViewerForMain from '../../../../components/CourseCard';
import styles from './CourseMain.module.scss';
import { Link } from 'react-router-dom';

const CourseMain = () => {
  return (
    <section className={styles.main_courses}>
      <MainTitle title="курси" subtitle="нові уроки" />
      <CourseCardViewerForMain
        card_info={card_info.filter((card, index) => index <= 5)}
      />
      <div className={styles.mainCourses_buttonWrapper}>
        <Link to="/techniques">
          <Button text="до каталогу" />
        </Link>
      </div>
    </section>
  );
};

export default CourseMain;
