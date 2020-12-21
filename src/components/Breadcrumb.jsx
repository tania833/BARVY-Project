import React from 'react';
import PropTypes from 'prop-types';
import styles from './css_modules/Breadcrumb.module.scss';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  if (props.technique_or_teacher === '') {
    return (
      <ul className={styles.breadcrumb}>
        <li>
          <Link to="/">Головна</Link>
        </li>
        <li>
          <Link to={props.main_menu_item_link}>{props.main_menu_item}</Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className={styles.breadcrumb}>
      <li>
        <Link to="/">Головна</Link>
      </li>
      <li>
        <Link to={props.main_menu_item_link}>{props.main_menu_item}</Link>
      </li>
      <li>
        <Link to={props.technique_or_teacher_link}>
          {props.technique_or_teacher}
        </Link>
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
  main_menu_item_link: PropTypes.string,
  technique_or_teacher: PropTypes.string,
  technique_or_teacher_link: PropTypes.string,
  course: PropTypes.string,
};

export default Breadcrumb;
