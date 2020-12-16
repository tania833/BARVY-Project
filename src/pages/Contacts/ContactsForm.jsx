import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import { useForm } from 'react-hook-form';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      fontSize: '1.5rem'
    },
  })
);

export const ContactsForm = () => {
  const { register } = useForm();
  const [message, setMessage] = useState('');

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitFunc = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('name', event.target.name.value);
    formData.append('email', event.target.email.value);
    formData.append('text', event.target.text.value);

    const response = await fetch('https://dry-crag-28734.herokuapp.com', {
      method: 'POST',
      mode: 'cors',
      body: formData,
    });

    if (response.status === 200) {
      event.target.reset();
      setMessage(
        'Ми отримали Ваше повідомлення! Звʼяжемось найближчим часом :)'
      );
      setOpen(true);
    } else {
      setMessage('Щось пішло не так...Спробуйте ще раз :)');
    }
  };

  return (
    <form
      className={styles.contactsForm}
      onSubmit={(event) => onSubmitFunc(event)}
    >
      <div className={styles.contactsLabelContainer}>
        <label className={styles.contactsLabel}>Напишіть нам</label>
      </div>
      <input
        name="name"
        ref={register({ maxLength: 30 })}
        placeholder="Прізвище, ім’я *"
        className={styles.contactsTextField}
        required
      />
      <input
        name="email"
        ref={register({ min: 18, max: 99 })}
        placeholder="E-mail *"
        className={styles.contactsTextField}
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />
      <textarea
        name="text"
        className={styles.contactsTextArea}
        placeholder="Введіть Ваше повідомлення"
      />
      <div className={styles.contactsSubmitButtonContainer}>
        <input
          type="submit"
          value="Відправити"
          className={styles.contactsSubmitButton}
        />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <p id="transition-modal-description">{message}</p>
            </div>
          </Fade>
        </Modal>
      </div>
    </form>
  );
};
