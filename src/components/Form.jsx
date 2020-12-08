import React, { useState } from 'react';
import styles from './css_modules/Form.module.scss';

const Form = () => {
  const [value, setValue] = useState('');
  return (
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
  );
};

export default Form;
