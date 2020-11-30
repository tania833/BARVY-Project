import React from 'react';
import styles from './css_modules/Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div className={styles.button_block}>
      <div className={styles.button_text}>{props.text}</div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
