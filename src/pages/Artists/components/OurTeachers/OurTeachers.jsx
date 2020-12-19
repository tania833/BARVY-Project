import React from 'react';
import { Link } from 'react-router-dom';
import TeacherAPI from '../../../../MOCKS/TeacherAPI';
import styles from './OurTeachers.module.scss';
import Title from '../../../../components/TitleOnly';
import TeachersSearch from '../TeachersSearch/TeachersSearch';
import TeachersFooter from '../TeachersFooter/TeachersFooter';

const OurTeachers = () => {
  return (
    <div className={styles.teachersContainer}>
      <div className={styles.teachersTitle}>
        <Title title="Митці" />
      </div>
      <div className={styles.teachersSubTitle}>Наші викладачі</div>
      <TeachersSearch />
      <ul className={styles.teachersRow}>
        {TeacherAPI.all().map((teacher) => (
          <li className={styles.teachersRow__item} key={teacher.path}>
            <div className={styles.teachersPhoto__wrapper}>
              <Link to={`/artists/${teacher.path}`}>
                <img
                  className={styles.teachersPhoto__photo}
                  src={teacher.group_photo}
                  alt={teacher.name}
                />
              </Link>
            </div>
            <div className={styles.teachersInfo}>
              <Link to={`/artists/${teacher.path}`}>
                <div className={styles.teachersInfo__name}>{teacher.name}</div>
              </Link>
              <div className={styles.teachersInfo__technique}>
                {teacher.group_info}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <TeachersFooter />
    </div>
  );
};

export default OurTeachers;
