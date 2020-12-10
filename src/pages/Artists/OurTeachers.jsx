import React, { useState } from 'react';
import styles from './OurTeachers.module.scss';
import Title from '../../components/TitleOnly';
import FooterMainBlue from './../Main/components/FooterMainBlue';
// import our_teachers_info from '../../MOCKS/our_teachers_info_MOCK';

const OurTeachers = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div className={styles.teachersContainer}>
        <p>
          <span>Головна </span>
          <span>/ Викладачі</span>
        </p>
        <div className={styles.titleWrapper}>
          <Title title="Митці" subtitle="Наші викладачі" />
        </div>
        <div className={styles.searchBlock}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // search will come here
              setValue('');
            }}
            className={styles.topbar__form}
          >
            <input
              type="text"
              name="search"
              placeholder="Знайти"
              className={styles.topbar__input}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <input
              type="submit"
              name="submit-input"
              className={styles.topbar__submit}
              value=""
            />
          </form>
        </div>
        <div className={styles.teachersRow}></div>
        <div className={styles.teachersFooter}></div>
      </div>
    </>
  );
};

export default OurTeachers;
