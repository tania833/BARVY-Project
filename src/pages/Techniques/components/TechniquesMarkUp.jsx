import React, { useState } from 'react';
import styles from './Techniques.module.scss';
import card_info from '../../../MOCKS/card_info_MOCK';
import Title from '../../../components/TitleOnly';
import CourseCardViewer from '../../../components/CourseCard';
import PropTypes from 'prop-types';

const ButtonFilter = (props) => {
  return (
    <div className={styles.buttonFilterWrapper} onClick={props.click}>
      <div className={styles.buttonText}>{props.text}</div>
    </div>
  );
};

ButtonFilter.propTypes = {
  text: PropTypes.string,
};

ButtonFilter.propTypes = {
  click: PropTypes.event,
};

const TechniquesMarkUp = (props) => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.artistsContainer}>
      <p>
        <span>Головна </span>
        <span>/ Курси</span>
      </p>
      <div className={styles.titleWrapper}>
        <Title title="Усі" subtitle="Курси" />
      </div>
      <div className={styles.searchBlock}>
        <ButtonFilter text="Фільтри" click={props.drawerClickHandler} />
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
        <button>Сортувати</button>
      </div>
      <CourseCardViewer card_info={card_info} />
    </div>
  );
};

TechniquesMarkUp.propTypes = {
  drawerClickHandler: PropTypes.object,
};

export default TechniquesMarkUp;
