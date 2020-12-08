import React from 'react';
import styles from './Techniques.module.scss';
import card_info from '../../../MOCKS/card_info_MOCK';
import Title from '../../../components/TitleOnly';
import CourseCardViewer from '../../../components/CourseCard';
import PropTypes from 'prop-types';
import Form from '../../../components/Form';
import Breadcrumb from '../../../components/Breadcrumb';

const ButtonFilter = (props) => {
  return (
    <div className={styles.buttonFilterSortWrapper} onClick={props.click}>
      <div className={styles.buttonText}>{props.text}</div>
    </div>
  );
};

const ButtonSort = (props) => {
  return (
    <div className={styles.buttonFilterSortWrapper} onClick={props.click}>
      <div className={styles.buttonText}>{props.text}</div>
    </div>
  );
};

ButtonFilter.propTypes = {
  text: PropTypes.string,
  click: PropTypes.event,
};

ButtonSort.propTypes = {
  text: PropTypes.string,
  click: PropTypes.event,
};

const TechniquesMarkUp = (props) => {
  let width = window.innerWidth;
  let buttonSort;
  if (width < 768) {
    buttonSort = '';
  } else {
    buttonSort = <ButtonSort text="Сортувати" />;
  }

  let buttonFilter;
  if (width < 576) {
    buttonFilter = '';
  } else {
    buttonFilter = (
      <ButtonFilter text="Фільтри" click={props.drawerClickHandler} />
    );
  }

  return (
    <div className={styles.techniquesContainer}>
      <Breadcrumb main_menu_item="Курси" />
      <div className={styles.titleWrapper}>
        <Title title="Усі" subtitle="Курси" />
      </div>
      <div className={styles.searchBlock}>
        <img
          src="../icons/filter.svg"
          alt="filter_icon"
          className={styles.filterIcon}
        />
        {buttonFilter}
        <Form />
        {buttonSort}
      </div>
      <CourseCardViewer card_info={card_info} />
    </div>
  );
};

TechniquesMarkUp.propTypes = {
  drawerClickHandler: PropTypes.object,
};

export default TechniquesMarkUp;
