import React, { useState } from 'react';
import styles from './OurTeachers.module.scss';
import Title from '../../components/TitleOnly';
import AboutTeachers from './components/AboutTechers/AboutTeach/AboutTeachers';
import TeachersFooter from './components/AboutTechers/TeachersFooter/TeachersFooter';
import our_teachers_info from '../../MOCKS/our_teachers_info_MOCK';

const OurTeachers = () => {
  const [value, setValue] = useState('');
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
        <div className={styles.teachersSearch}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // search will come here
              setValue('');
            }}
            className={styles.teachersSearch__form}
          >
            <input
              type="text"
              name="search"
              placeholder="Знайти"
              className={styles.teachersSearch__input}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <input
              type="submit"
              name="submit-input"
              className={styles.teachersSearch__submit}
              value=""
            />
          </form>
        </div>
        <AboutTeachers teachersRow__item={our_teachers_info} />
        <TeachersFooter />
      </div>
    </>
  );
};

export default OurTeachers;
