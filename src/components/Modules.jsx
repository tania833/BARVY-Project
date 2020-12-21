import React from 'react';
import styles from './css_modules/Modules.module.scss';
import PropTypes from 'prop-types';
import card_info from '../MOCKS/card_info_MOCK';

const Modals = (props) => {
  const { likes, setBuy } = props;
  const copyBuy = likes.slice(0, likes.length);
  const deleteItem = (id) => {
    const newBuyToRender = copyBuy.filter( el => el != id)
    setBuy(newBuyToRender);
  };

  const toRender = card_info.filter((card) => likes.includes(card.id));
  const cardsToRender = toRender.map((card) => {
    return (
      <div className={styles.order__row} key={card.key}>
        <div className={styles.order__cell}>
          <div className={styles.order__pic}>
            <img className={styles.order__pic_img} src={card.img.url} />
          </div>
          <p className={styles.order__cell_text}>{card.author.technique}</p>
        </div>
        <div className={styles.order__cell}>
          <strong className={styles.order__cell_strong}>{card.price} </strong>{' '}
          грн
        </div>
        <div className={styles.order__cell}>
          <a href="#">
            <img
              className={styles.order__trash}
              src="../icons/trash.svg"
              alt="trash_icon"
              onClick={() => deleteItem(card.id)}
            />
          </a>
        </div>
      </div>
    );
  });

  const formToRender =
    cardsToRender.length > 0 ? (
      <>
        <div className={styles.cartContainer__Title}>Кошик</div>
        <div className={styles.order}>
          <div className={styles.order__row}>
            <div className={styles.order__cell}>Назва</div>
            <div className={styles.order__cell}></div>
            <div className={styles.order__cell}>Ціна</div>
            <div className={styles.order__cell}></div>
          </div>
          {cardsToRender}
          <form className={styles.orderForm__wrapper}>
            <div className={styles.orderForm}>
              <p className={styles.orderForm__text}>
                Щоб оформити замовлення, вкажіть свій e-mail та прізвище{' '}
              </p>
              <input
                className={styles.orderForm__input}
                type="text"
                name="name"
                placeholder="Прізвище, ім'я *"
                required="required"
              />
              <input
                className={styles.orderForm__input}
                type="email"
                name="email"
                placeholder="E-mail *"
                required="required"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
              <input
                type="submit"
                value="Оформити"
                className={styles.SubmitButton}
              />
            </div>
          </form>
        </div>
      </>
    ) : (
      <p className={styles.oops}>Отакої...Кошик порожній :(</p>
    );

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <div className={styles.cartWrapper}>
          {formToRender}
        </div>
      </div>
    </div>
  );
};

Modals.propTypes = {
  likes: PropTypes.array,
  setBuy: PropTypes.func,
};

export default Modals;
