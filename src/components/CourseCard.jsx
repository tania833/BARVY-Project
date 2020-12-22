import React from 'react';
import styles from './css_modules/CourseCard.module.scss';
import PropTypes from 'prop-types';
import sprite from '../sprite.svg';
import { Link } from 'react-router-dom';

const CardPhoto = (props) => {
  return (
    <a className={styles.courseCard_photo_wrapper} href="/">
      <img
        className={styles.courseCard__photo}
        src={props.img_info.url}
        alt={props.title_info}
      />
    </a>
  );
};

CardPhoto.propTypes = {
  img_info: PropTypes.object,
  title_info: PropTypes.string,
};

const AuthorInfo = (props) => {
  return (
    <div className={styles.courseCard__author_info}>
      <a href="/about">
        <div className={styles.courseCard__author}>
          {props.author_info.name}
        </div>
      </a>
      <a href="/">
        <div className={styles.courseCard__technique}>
          {props.author_info.technique}, {props.author_info.course_format}
        </div>
      </a>
    </div>
  );
};

AuthorInfo.propTypes = {
  author_info: PropTypes.object,
};

const TitleInfo = (props) => {
  const { id, setLikes, likes } = props;

  const addLikes = () => {
    const storeLikes = likes.slice(0, likes.length);
    const likesArray = storeLikes.includes(id)
      ? [...storeLikes.filter((el) => el != id)]
      : [...likes, id];
    setLikes(likesArray);
  };

  const card = (
    <div className={styles.courseCard__title_info}>
      <div className={styles.courseCard__title}>{props.title_info}</div>
      <svg
        onClick={addLikes}
        className={
          likes.includes(id)
            ? `${styles.courseCard__like_icon} ${styles.active}`
            : styles.courseCard__like_icon
        }
      >
        <use href={sprite + '#heart'} />
      </svg>
    </div>
  );

  return card;
};

TitleInfo.propTypes = {
  title_info: PropTypes.string,
  id: PropTypes.number,
  likes: PropTypes.array,
  setLikes: PropTypes.function,
};

const PriceInfo = (props) => {
  return (
    <div className={styles.courseCard__price}>
      <span className={styles.courseCard__price_number}>
        {props.price_info}
      </span>
      <span className={styles.courseCard__price_currency}> грн</span>
    </div>
  );
};

PriceInfo.propTypes = {
  price_info: PropTypes.string,
};

const CartInfo = (props) => {
  return <div className={styles.courseCard__cart}>{props.children}</div>;
};

CartInfo.propTypes = {
  children: PropTypes.array,
};

const CourseButton = (props) => {
  const { id, buy, setBuy } = props;

  const addToBasket = () => {
    const storeToBuy = buy.slice(0, buy.length);
    const toBuyArray = storeToBuy.includes(id)
      ? [...storeToBuy.filter((el) => el != id)]
      : [...buy, id];
    setBuy(toBuyArray);
  };
  return (
    <button className={
      buy.includes(id) ?
      `${styles.courseCard_button_text} ${styles.black}` :
      styles.courseCard_button_text} 
      onClick={addToBasket}>
      КУПИТИ
    </button>
  );
};

CourseButton.propTypes = {
  buy: PropTypes.array,
  setBuy: PropTypes.function,
  id: PropTypes.number,
};

const CourseCardViewerForMain = (props) => {
  const courseCardInfoView = props.card_info.map((card) => (
    <div key={card.id} className={styles.courseCard__component}>
      <Link to="/course">
      <div>
        <CardPhoto img_info={card.img} />
      </div>
      </Link>
      <div className={styles.courseCard__info}>
        <AuthorInfo author_info={card.author} />
        <TitleInfo
          title_info={card.title}
          id={card.id}
          likes={props.likes}
          setLikes={props.setLikes}
        />
        <CartInfo>
          <PriceInfo price_info={card.price} />
          <CourseButton buy={props.buy} setBuy={props.setBuy} id={card.id} />
        </CartInfo>
      </div>
      </div>
    
  ));
  return <div className={styles.courseCard__wrapper}>{courseCardInfoView}</div>;
};

CourseCardViewerForMain.propTypes = {
  card_info: PropTypes.array,
  likes: PropTypes.array,
  setLikes: PropTypes.func,
  buy: PropTypes.array,
  setBuy: PropTypes.func,
};

export default CourseCardViewerForMain;
