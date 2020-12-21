import React from 'react';
import PropTypes from 'prop-types';
import TechAPI from '../../../../../MOCKS/TechAPI';
import card_info from '../../../../../MOCKS/card_info_MOCK';
import CourseCardViewerForMain from '../../../../../components/CourseCard';
import styles from './CoursePage.module.scss';
import Title from '../../../../../components/TitleOnly';
import Breadcrumb from '../../../../../components/Breadcrumb';

const CoursePage = (props) => {
  const course = TechAPI.get(props.match.params.path);
  let card_techniques = card_info.filter(
    (card) => card.author.technique === course.techTitle
  );

  if (card_techniques.length === 0) {
    return <div>Sorry, but the courses was not found</div>;
  }
  return (
    <div className={styles.artistsContainer}>
      <Breadcrumb
        main_menu_item="Курси"
        main_menu_item_link="/techniques"
        technique_or_teacher={course.techTitle}
        technique_or_teacher_link={`/technologies/${course.path}`}
      />
      <div className={styles.courseTitleWrapper}>
        <Title title="Техніки" subtitle={course.techTitle} />
      </div>
      <div className={styles.cardWrapper}>
        <CourseCardViewerForMain
          card_info={card_info.filter(
            (card) => card.author.technique === course.techTitle
          )}
          likes={props.likes}
        setLikes={props.setLikes}
        buy={props.buy}
        setBuy={props.setBuy}
        />
      </div>
    </div>
  );
};

CoursePage.propTypes = {
  match: PropTypes.object,
  likes: PropTypes.array,
  buy: PropTypes.array,
  setLikes: PropTypes.function,
  setBuy: PropTypes.function,
};

export default CoursePage;
