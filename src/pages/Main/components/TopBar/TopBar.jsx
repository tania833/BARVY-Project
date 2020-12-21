import React, { useState } from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const [value, setValue] = useState('');
  let width = window.innerWidth;
  let renderedText;
  if (width > 576) {
    renderedText = (
      <div className={styles.topbar__subtitle}>сайт про українських митців</div>
    );
  } else {
    renderedText = (
      <div className={styles.topbar__subtitle}>творчі курси онлайн</div>
    );
  }
  return (
    <div className={styles.topbarWrapper}>
      <div className={styles.topbar}>
        <div className={styles.topbar__title}>БАРВИ</div>
        {renderedText}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setValue('');
          }}
          className={styles.topbar__form}
        >
          <input
            type="text"
            name="search"
            placeholder="Знайти свій курс"
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
    </div>
  );
};

export default TopBar;
