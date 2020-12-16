import React from 'react';
import Title from '../../components/TitleOnly';
import styles from './Contacts.module.scss';
import { ContactsForm } from './ContactsForm';

export const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.titleWrapper}>
        <Title title="Контакти" />
      </div>
      <div className={styles.contactsContent}>
        <div className={styles.textContainer}>
          <p className={styles.contactsPara}><a href="tel:+380962722222">+38 (096) 272-22-22</a></p>
          <p className={styles.contactsPara}><a href="emailto:barvy_courses@gmail.com">barvy_courses@gmail.com</a></p>
          <p className={styles.contactsPara}>
            Ми на зв’язку з: <br />
            9:00 до 20:00
          </p>
          <div className={styles.contactsImageContainer}>
            <img
              src="https://i.imgur.com/nQJBboH.png?1"
              alt="girl and computer"
              className={styles.contactsImage}
            />
          </div>
        </div>
        <div className={styles.contactsFormContainer}>
          <ContactsForm />
        </div>
      </div>
    </div>
  );
};
