import React from 'react';
import styles from './Contacts.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

export const ContactsForm = () => {
  const { register, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmitFunc = () => {
    console.log('submit');
  };

  return (
    <form className={styles.contactsForm} onSubmit={() => onSubmitFunc()}>
      <div className={styles.contactsLabelContainer}>
        <label className={styles.contactsLabel}>Напишіть нам</label>
      </div>
      <input
        name="name"
        ref={register({ maxLength: 30 })}
        placeholder="Прізвище, ім’я *"
        className={styles.contactsTextField}
      />
      {errors.name && (
        <p className={styles.contactsError}>{'Обовʼязкове поле'}</p>
      )}
      <input
        name="email"
        ref={register({ min: 18, max: 99 })}
        placeholder="E-mail *"
        className={styles.contactsTextField}
      />
      {errors.email && (
        <p className={styles.contactsError}>
          {'Введіть пошту в правильному форматі'}
        </p>
      )}
      <textarea
        name="textarea"
        className={styles.contactsTextArea}
        placeholder="Введіть Ваше повідомлення"
      />
      <input
        type="submit"
        value="Відправити"
        className={styles.contactsSubmitButton}
      />
    </form>
  );
};
