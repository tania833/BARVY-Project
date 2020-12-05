import React from 'react';
import card_info from '../../../../MOCKS/card_info_MOCK';
import MainTitle from '../../../../components/Title';
import Button from '../../../../components/Button';
import CourseCardViewerForMain from '../../../../components/CourseCard';
import styles from './CourseMain.module.scss';

const CourseMain = () => {
  return (
    <section className={styles.main_courses}>
      <MainTitle title="курси" subtitle="нові уроки" />
      <CourseCardViewerForMain
        card_info={card_info.filter((card, index) => index <= 5)}
      />
      <div className={styles.mainCourses_buttonWrapper}>
        <Button text="до каталогу" />
      </div>
    </section>
  );
};

export default CourseMain;
