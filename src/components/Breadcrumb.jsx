import React from 'react';
import PropTypes from 'prop-types';
import styles from './css_modules/Breadcrumb.module.scss';

const Breadcrumb = (props) => {
  return (
    <ul className={styles.breadcrumb}>
      <li>
        <a href="/">Головна</a>
      </li>
      <li>
        <a href="#">{props.main_menu_item}</a>
      </li>
      <li>
        <a href="#">{props.technique_or_teacher}</a>
      </li>
    </ul>
  );
};

Breadcrumb.defaultProps = {
  technique_or_teacher: '',
  course: '',
};

Breadcrumb.propTypes = {
  main_menu_item: PropTypes.string,
  technique_or_teacher: PropTypes.string,
  course: PropTypes.string,
};

export default Breadcrumb;
