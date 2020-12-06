import React from 'react';
import styles from './css_modules/TitleForPages.module.scss';
import PropTypes from 'prop-types';

const Title = (props) => {
  return (
    <>
      <div className={styles.mainTitle}>{props.title}</div>
      <div className={styles.mainSubtitle}>{props.subtitle}</div>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
