import React from 'react';
import styles from './css_modules/ButtonWhite.module.scss';
import PropTypes from 'prop-types';

const ButtonWhite = (props) => {
  return (
    <div className={styles.button_block}>
      <div className={styles.button_text}>{props.text}</div>
    </div>
  );
};

ButtonWhite.propTypes = {
  text: PropTypes.string,
};

export default ButtonWhite;
