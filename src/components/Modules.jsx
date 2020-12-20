import React from 'react';
// import { Link } from 'react-router-dom';
// import Title from '../../components/Title';
import styles from './css_modules/Modules.module.scss';
import Button from './Button';

const Modals = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.blackout}></div>
      <div className={styles.cartContainer}>
        {/* <Title title="" subtitle="Кошик" /> */}
        <div className={styles.cartContainer__Title}>Кошик</div>
        <div className={styles.order}>
          <div className={styles.order__row}>
            <div className={styles.order__cell}>Назва</div>
            <div className={styles.order__cell}></div>
            <div className={styles.order__cell}>Ціна</div>
            <div className={styles.order__cell}></div>
          </div>
          <div className={styles.order__row}>
            <div className={styles.order__cell}>
              <div className={styles.order__pic}>
                <img className={styles.order__pic_img} src="https://imgur.com/mHfA16u.jpg"/>
              </div>
            </div>
            <div className={styles.order__cell}>
              <p className={styles.order__cell_text}>Курс</p>
              <p className={styles.order__cell_text}>Основи акварельної техніки</p>
            </div>
            <div className={styles.order__cell}><strong className={styles.order__cell_strong}>500 </strong> грн</div>
            <div className={styles.order__cell}>
              <a href="#"><img src="../icons/trash.svg" alt="trash_icon" /></a>
            </div>
          </div>
          <div className={styles.order__row}>
            <div className={styles.order__cell}>
              <div className={styles.order__pic}>
                <img className={styles.order__pic_img} src="https://imgur.com/Fj0MU5Q.jpg"/>
              </div>
            </div>
            <div className={styles.order__cell}>
              <p className={styles.order__cell_text}>Урок</p>
              <p className={styles.order__cell_text}>Архітектурні замальовки</p>
            </div>
            <div className={styles.order__cell}><strong className={styles.order__cell_strong}>150 </strong> грн</div>
            <div className={styles.order__cell}>
              <a href="#"><img src="../icons/trash.svg" alt="trash_icon" /></a>
            </div>
          </div>
          <div className={styles.order__row}>
            <div className={styles.order__cell}></div>
            <div className={styles.order__cell}>Сума:</div>
            <div className={styles.order__cell}><strong className={styles.order__cell_strong}>650 </strong> грн</div>
            <div className={styles.order__cell}></div>
          </div>
        </div>

        <form className={styles.order}>
          <div className={styles.orderForm}>
            <p className={styles.orderForm__text}>Щоб оформити замовлення, вкажіть свій e-mail та прізвище </p>
            <input className={styles.orderForm__input} type="text" name="name" placeholder="Прізвище, ім'я *" required="required"/>
            <input className={styles.orderForm__input} type="email" name="email" placeholder="E-mail *" required="required"/>
            <p className={styles.orderForm__text}>Будь ласка, активуйте посилання, що прийде на пошту. Після цього ви отримаєте пароль для входу. Якщо листа немає у вхідних - перевірте спам.</p>
          </div>

          <div className={styles.orderExt}>
            <div className={styles.orderExt__Pay}>
              <div className={styles.orderExt__Title}>Спосіб оплати:</div>
              <div className={styles.orderExt__select}>
                <label className={styles.orderExt__select}>
                  <input className={styles.orderExt__select_input} type="radio" name="paymethod" id="liqpay" /> Liq Pay
                </label>
                <label className={styles.orderExt__select}>
                  <input className={styles.orderExt__select_input} type="radio" name="paymethod" id="privat" /> Приват 24
                </label>
                <label className={styles.orderExt__select}>
                  <input className={styles.orderExt__select_input} type="radio" name="paymethod" id="bankcard" /> Банківська картка
                </label>
              </div>
            </div>
            <div className={styles.orderExt__Submit}>
              <Button text="перейти до оплати" />
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Modals;
