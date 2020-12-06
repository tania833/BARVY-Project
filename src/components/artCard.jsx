import React from 'react';
import styles from './css_modules/artCard.module.scss';
import PropTypes from 'prop-types';

const TechArtCard = (props) => {
  return (
    <a className={styles.technoPic__Cont} href="{props.page_url.link}">     
        <div className={styles.technoPic__title}>{props.techTitle}</div>
        <img
            className={styles.technoPic__Img}
            src={props.techImg}
            alt={props.techTitle}
        />
    </a>
  );
};

TechArtCard.propTypes = {
    techTitle: PropTypes.string,
    techImg: PropTypes.string,
    techLink: PropTypes.string
}

export default TechArtCard;