import React from "react";
import styles from "./css_modules/CourseCard.module.scss"

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

const AuthorInfo = (props) => {
  return (
    <div className={styles.courseCard__author_info}>
      <a href="/about"><div className={styles.courseCard__author}>{props.author_info.name}</div></a>
      <a href="/about"><div className={styles.courseCard__technique}>{props.author_info.technique}</div></a>
    </div>
  );
};

const TitleInfo = (props) => {
  return (
    <div className={styles.courseCard__title_info}>
      <div className={styles.courseCard__title}>{props.title_info}</div>
      <img className={styles.courseCard__like_icon} src="../icons/heart.svg" alt="like_icon" />
    </div>
  );
};

const PriceInfo = (props) => {
  return (
    <div className={styles.courseCard__price}>
      <span className={styles.courseCard__price_number}>{props.price_info}</span>
      <span className={styles.courseCard__price_currency}> грн</span>
    </div>
  );
};

const CartInfo = (props) => {
  return <div className={styles.courseCard__cart}>{props.children}</div>;
};

const CourseButton = () => {
  return (
    <div className={styles.courseCard_button_block}>
      <div className={styles.courseCard_button_text}>КУПИТИ</div>
    </div>
  );
};

const CourseCardViewerForMain = (props) => {
  const courseCardInfo = props.card_info.filter((card, index) => index <= 5).map((card) => (
    <div key={card.id} className={styles.courseCard__component}>
      <div><CardPhoto img_info={card.img} /></div>
      <div className={styles.courseCard__info}>
        <AuthorInfo author_info={card.author} />
        <TitleInfo title_info={card.title} />

        <CartInfo>
          <PriceInfo price_info={card.price} />
          <CourseButton/>
        </CartInfo>
      </div>
    </div>
  ));
  return <div className={styles.courseCard__wrapper}>{courseCardInfo}</div>;
};

export default CourseCardViewerForMain;
