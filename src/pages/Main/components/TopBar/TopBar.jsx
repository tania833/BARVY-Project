import React, { useState } from "react";
import styles from './TopBar.module.scss';

const TopBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.topbarWrapper}>
      <div className={styles.topbar}>
        <div className={styles.topbar__title}>БАРВИ</div>
        <div className={styles.topbar__subtitle}>сайт про українських митців</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // search will come here
            setValue("");
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
