import React from 'react';
import styles from './OurTeachers.module.scss';
import Title from '../../components/TitleOnly';
import AboutTeachers from './components/AboutTeachers/AboutTeachers';
import TeachersSearch from './components/TeachersSearch/TeachersSearch';
import TeachersFooter from './components/TeachersFooter/TeachersFooter';
import our_teachers_info from '../../MOCKS/our_teachers_info_MOCK';

const OurTeachers = () => {
  return (
    <div className={styles.teachersContainer}>
      <div className={styles.teachersTitle}>
        <Title title="Митці" />
      </div>
      <div className={styles.teachersSubTitle}>Наші викладачі</div>
      <TeachersSearch />
      <section className={styles.teachersRow}>
        <AboutTeachers our_teachers_info={our_teachers_info} />
      </section>
      <TeachersFooter />
    </div>
  );
};

export default OurTeachers;
