import React, { useState } from 'react';
import styles from './TeachersSearch.module.scss';

const TeachersSearch = () => {
  const [value, setValue] = useState('');
  return (
    <section className={styles.teachersSearch}>
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
    </section>
  );
};

export default TeachersSearch;
