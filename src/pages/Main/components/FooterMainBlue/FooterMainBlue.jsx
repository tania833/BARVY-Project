import React from "react";
import Button from "../../../../components/Button";
import styles from "./FooterMainBlue.module.scss";

const FooterMainBlue = () => {
  return (
    <section className={styles.footerBlue__container}>
      <div className={styles.footerBlue__photo_wrapper}>
        <img
          className={styles.footerBlue__photo}
          src="https://i.imgur.com/lQZRndB.png"
          alt="superman_left"
        />
      </div>
      <div className={styles.footerBlue__text_block}>
        <div className={styles.footerBlue__text}>
          <p className={styles.footerBlue__text_paragraph}>
            Нам важливо підтримати та заявити про талановитих митців,
            художників, дизайнерів з різних куточків України, які готові
            ділитись та навчати.{" "}
          </p>
          <p>
            Долучайтесь до викладачів та поділіться власними знаннями і технікою
          </p>
        </div>
        <div className={styles.footerBlue__buttonWrapper}>
          <Button text="Написати нам" />
        </div>
      </div>
    </section>
  );
};

export default FooterMainBlue;
