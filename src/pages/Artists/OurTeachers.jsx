import React from 'react';
import styles from './OurTeachers.module.scss';
import Title from '../../components/TitleOnly';
import AboutTeachers from './components/AboutTeachers/AboutTeachers';
import TeachersSearch from './components/TeachersSearch/TeachersSearch';
import TeachersFooter from './components/TeachersFooter/TeachersFooter';
import our_teachers_info from '../../MOCKS/our_teachers_info_MOCK';

const OurTeachers = () => {
  // const items = OurTeachersInfo_MOCK.map((item) => {
  //   return (
  //     <AboutTeachers
  //       key={item.id}
  //       src={item.imgInfo.url}
  //       alt={item.imgInfo.alt}
  //       teacherInfo={item.teacherInfo.name}
  //       teachereTchnique={item.teacherInfo.technique}
  //     />
  //   );
  // });
  return (
    <>
      <div className={styles.teachersContainer}>
        <p>
          <span>Головна </span>
          <span>/ Викладачі</span>
        </p>
        <div className={styles.teachersTitle}>
          <Title title="Митці" subtitle="Наші викладачі" />
        </div>
        <TeachersSearch />
        <AboutTeachers our_teachers_info={our_teachers_info} />
        <TeachersFooter />
      </div>
    </>
  );
};

export default OurTeachers;
