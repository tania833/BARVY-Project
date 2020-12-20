import React from 'react';
import card_info from '../../MOCKS/card_info_MOCK';
import PropTypes from 'prop-types';
import styles from '../css_modules/CourseCard.module.scss';
import sprite from '../../sprite.svg';

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
      <a href="/about">
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
  const card = (
    <div className={styles.courseCard__title_info}>
      <div className={styles.courseCard__title}>{props.title_info}</div>
      <svg className={`${styles.courseCard__like_icon} ${styles.active}`}>
        <use href={sprite + '#heart'} />
      </svg>
    </div>
  );

  return card;
};

TitleInfo.propTypes = {
  title_info: PropTypes.string,
  id: PropTypes.number,
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

export const ListLikes = (props) => {
  const { likes } = props;
  const cards = card_info.filter((card) => likes.includes(card.id));

  const toRender = cards.map((card) => (
    <div key={card.id} className={styles.courseCard__component}>
      <div>
        <CardPhoto img_info={card.img} />
      </div>
      <div className={styles.courseCard__info}>
        <AuthorInfo author_info={card.author} />
        <TitleInfo title_info={card.title} id={card.id} />

        <CartInfo>
          <PriceInfo price_info={card.price} />
        </CartInfo>
      </div>
    </div>
  ));

  const whatToRender =
    toRender.length > 0 ? (
      toRender
    ) : (
      <p className={styles.courseCard__technique}>Упс, жодних вподобань</p>
    );
  return (
    <>
      <h1 className={styles.courseCard__title_info}>Вподобання</h1>
      <div className={styles.likesList}>{whatToRender}</div>
    </>
  );
};

ListLikes.propTypes = {
  likes: PropTypes.array,
};
