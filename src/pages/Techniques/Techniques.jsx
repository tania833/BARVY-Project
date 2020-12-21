import React, { useState, useEffect } from 'react';
import BackdropTechniques from './components/BackdropTechniques';
import SideDrawerTechniques from './components/SideDrawerTechniques';
import CourseMarkUp from './components/CourseMarkUp';
import card_info from '../../MOCKS/card_info_MOCK';
import PropTypes from 'prop-types';

const Techniques = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [cardsRender, setCardsRender] = useState(card_info);

  const [state, setState] = useState({
    sideDrawerOpen: false,
  });

  const drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let backdrop;

  if (state.sideDrawerOpen) {
    backdrop = <BackdropTechniques click={backdropClickHandler} />;
  }

  const techniqueCheckboxInit = {
    ['Акварель']: false,
    ['Рисунок']: false,
    ['Олійний живопис']: false,
    ['Фотографія']: false,
    ['Історія мистецтв']: false,
    ['Ілюстрація']: false,
    ['Декоративне']: false,
    ['Дитячі']: false,
  };

  const techniquesRenderInit = [
    'Акварель',
    'Рисунок',
    'Олійний живопис',
    'Фотографія',
    'Історія мистецтв',
    'Ілюстрація',
    'Декоративне',
    'Дитячі',
  ];

  const teachersCheckBoxInit = {
    ['Христина Стринадюк']: false,
    ['Павло Бенедюк']: false,
    ['Наталя Брічук']: false,
    ['Степан Карпюк']: false,
    ['Олександра Промська']: false,
    ['Наталя Серветник']: false,
    ['Кароліна Бундаш']: false,
    ['Олександр Бобришев']: false,
    ['Антон Філик']: false,
  };

  const teachersToRenderInit = [
    'Христина Стринадюк',
    'Павло Бенедюк',
    'Наталя Брічук',
    'Степан Карпюк',
    'Олександра Промська',
    'Наталя Серветник',
    'Кароліна Бундаш',
    'Олександр Бобришев',
    'Антон Філик',
  ];

  const [techniqueCheckbox, setTechnique] = useState(techniqueCheckboxInit);

  const [techniquesRender, setTechniquesRender] = useState(
    techniquesRenderInit
  );

  const chooseTechnique = (event) => {
    const checkedTypes = {
      ...techniqueCheckbox,
      [event.target.id]: event.target.checked,
    };
    setTechnique(checkedTypes);

    const techniquesToRender = Object.keys(checkedTypes).filter(
      (key) => checkedTypes[key] === true
    );
    setTechniquesRender(techniquesToRender);
  };

  const [teachersCheckBox, setTeachersCheckbox] = useState(
    teachersCheckBoxInit
  );

  const [teachersToRender, setTeachersToRender] = useState(
    teachersToRenderInit
  );

  const chooseTeachers = (event) => {
    const checkedTeachers = {
      ...teachersCheckBox,
      [event.target.id]: event.target.checked,
    };
    setTeachersCheckbox(checkedTeachers);

    const teachersRender = Object.keys(checkedTeachers).filter(
      (key) => checkedTeachers[key] === true
    );
    setTeachersToRender(teachersRender);
  };

  const [rangeValue, setRangeValue] = useState({
    min: 0,
    max: 1000,
  });

  const onRangeChange = (value) => {
    setRangeValue(value);
  };

  const setChanges = () => {
    const cardsToRender = card_info.filter(
      (card) =>
        techniquesRender.includes(card.author.technique) &&
        teachersToRender.includes(card.author.name) &&
        card.price > rangeValue.min &&
        card.price < rangeValue.max
    );
    setCardsRender(cardsToRender);
    setState({
      sideDrawerOpen: false,
    });
  };

  const resetFilters = () => {
    setTechnique(techniqueCheckboxInit);
    setTeachersCheckbox(teachersCheckBoxInit);
    setRangeValue({
      min: 0,
      max: 1000,
    });
    setCardsRender(card_info);
    setState({
      sideDrawerOpen: false,
    });
  };

  return (
    <div style={{ height: '100%' }}>
      <CourseMarkUp
        drawerClickHandler={drawerToggleClickHandler}
        cardsToRender={cardsRender}
        likes={props.likes}
        setLikes={props.setLikes}
        buy={props.buy}
        setBuy={props.setBuy}
      />
      <SideDrawerTechniques
        show={state.sideDrawerOpen}
        technique={techniqueCheckbox}
        chooseTechnique={chooseTechnique}
        setChanges={setChanges}
        chooseTeachers={chooseTeachers}
        teachersCheckBox={teachersCheckBox}
        onRangeChange={onRangeChange}
        resetFilters={resetFilters}
      />
      {backdrop}
    </div>
  );
};

Techniques.propTypes = {
  likes: PropTypes.array,
  setLikes: PropTypes.function,
  buy: PropTypes.array,
  setBuy: PropTypes.function,
};

export default Techniques;
