import React, { useState } from 'react';
import styles from './Techniques.module.scss';
import Title from '../../../components/TitleOnly';
import CourseCardViewer from '../../../components/CourseCard';
import PropTypes from 'prop-types';
import Form from '../../../components/Form';
import Breadcrumb from '../../../components/Breadcrumb';
import ButtonWhite from '../../../components/ButtonWhite';

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

const FilterIcon = (props) => {
  return (
    <img
      onClick={props.click}
      src="../icons/filter.svg"
      alt="filter_icon"
      className={styles.filterIcon}
    />
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

FilterIcon.propTypes = {
  click: PropTypes.event,
};

const CourseMarkUp = (props) => {
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

  const [size, setSize] = useState(6);
  const [sizeP, setSizeP] = useState(4);
  const [sizeM, setSizeM] = useState(3);

  let cards;
  if (width < 768 && width > 576) {
    cards = props.cardsToRender.slice(0, sizeP);
  } else if (width < 576) {
    cards = props.cardsToRender.slice(0, sizeM);
  } else {
    cards = props.cardsToRender.slice(0, size);
  }

  // const cards = props.cardsToRender.slice(0, size);
  let changeSize;

  if (width < 768 && width > 576) {
    changeSize = () => {
      setSizeP((sizeP) => (sizeP += 4));
    };
  } else if (width < 576) {
    changeSize = () => {
      setSizeM((sizeM) => (sizeM += 2));
    };
  } else {
    changeSize = () => {
      setSize((size) => (size += 6));
    };
  }

  const showMore =
    cards.length < props.cardsToRender.length ? (
      <ButtonWhite text="ПОКАЗАТИ ЩЕ" onClick={changeSize} />
    ) : (
      ''
    );

  let breadcrumbs;
  if (width < 768) {
    breadcrumbs = '';
  } else {
    breadcrumbs = <Breadcrumb main_menu_item="Курси" />;
  }
  return (
    <div className={styles.techniquesContainer}>
      {breadcrumbs}
      <div className={styles.titleWrapper}>
        <Title title="Усі" subtitle="Курси" />
      </div>
      <div className={styles.searchBlock}>
        <FilterIcon click={props.drawerClickHandler} />
        {buttonFilter}
        <Form />
        {buttonSort}
      </div>
      <CourseCardViewer card_info={cards} likes={props.likes} setLikes={props.setLikes}  buy={props.buy} setBuy={props.setBuy}/>
      <div className={styles.techniquesButtonWhiteWrapper}>
        {showMore}
      </div>
      <p className={styles.textCardsRendered}>Показано {cards.length} з {props.cardsToRender.length}</p>
    </div>
  );
};

CourseMarkUp.propTypes = {
  drawerClickHandler: PropTypes.func,
  cardsToRender: PropTypes.array,
  likes: PropTypes.array,
  setLikes: PropTypes.function,
  buy: PropTypes.array,
  setBuy: PropTypes.function,
};

export default CourseMarkUp;
