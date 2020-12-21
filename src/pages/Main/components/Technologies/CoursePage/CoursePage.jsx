import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TechAPI from '../../../../../MOCKS/TechAPI';
import card_info from '../../../../../MOCKS/card_info_MOCK';
import CourseCardViewerForMain from '../../../../../components/CourseCard';
import styles from './CoursePage.module.scss';
import Title from '../../../../../components/TitleOnly';
import Breadcrumb from '../../../../../components/Breadcrumb';
import ButtonWhite from '../../../../../components/ButtonWhite';

const CoursePage = (props) => {
  const [size, setSize] = useState(6);
  const course = TechAPI.get(props.match.params.path);
  const card_techniques = card_info.filter(
    (card) => card.author.technique === course.techTitle
  );
  const filter_cards = card_info.filter(
    (card) => card.author.technique === course.techTitle
  );

  if (card_techniques.length === 0) {
    return <div>Sorry, but the courses was not found</div>;
  }

  const cards = filter_cards.slice(0, size);
  const changeSize = () => {
    setSize((size) => (size += 6));
  };

  const showMore =
    cards.length < filter_cards.length ? (
      <ButtonWhite text="ПОКАЗАТИ ЩЕ" onClick={changeSize} />
    ) : (
      ''
    );

  let width = window.innerWidth;
  let breadcrumbs;
  if (width < 768) {
    breadcrumbs = '';
  } else {
    breadcrumbs = (
      <Breadcrumb
        main_menu_item="Курси"
        main_menu_item_link="/techniques"
        technique_or_teacher={course.techTitle}
        technique_or_teacher_link={`/technologies/${course.path}`}
      />
    );
  }

  return (
    <div className={styles.artistsContainer}>
      {breadcrumbs}
      <div className={styles.courseTitleWrapper}>
        <Title title="Техніки" subtitle={course.techTitle} />
      </div>
      <div className={styles.cardWrapper}>
        <CourseCardViewerForMain card_info={cards} />
      </div>
      <div className={styles.techniquesButtonWhiteWrapper}>{showMore}</div>
      <p className={styles.textCardsRendered}>
        Показано {cards.length} з {filter_cards.length}
      </p>
    </div>
  );
};

CoursePage.propTypes = {
  match: PropTypes.object,
  drawerClickHandler: PropTypes.func,
  cardsToRender: PropTypes.array,
};

// const Course = () => {
//   const [cardsRender, setCardsRender] = useState(card_info);

//   return (
//     <div style={{ height: '100%' }}>
//       <CoursePage
//         drawerClickHandler={drawerToggleClickHandler}
//         cardsToRender={cardsRender}
//       />
//       <SideDrawerTechniques
//         show={state.sideDrawerOpen}
//         technique={techniqueCheckbox}
//         chooseTechnique={chooseTechnique}
//         setChanges={setChanges}
//         chooseTeachers={chooseTeachers}
//         teachersCheckBox={teachersCheckBox}
//         onRangeChange={onRangeChange}
//         resetFilters={resetFilters}
//       />
//       {backdrop}
//     </div>
//   );
// };

export default CoursePage;
