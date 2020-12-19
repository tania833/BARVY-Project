import React from 'react';
import RangeInput from './RangeInput';
import './SideDrawerTechniques.scss';
import Button from '../../../components/Button';
import PropTypes from 'prop-types';
import TeacherAPI from '../../../MOCKS/TeacherAPI';

const ArtistName = (props) => {
  return (
    <>
      <input
        type="checkbox"
        id={props.author_name}
        name="author_name"
        onChange={props.chooseTeachers}
        checked={props.teachersCheckBox[props.author_name]}
      />
      <label htmlFor={props.author_name}>{props.author_name}</label>
    </>
  );
};

ArtistName.propTypes = {
  author_name: PropTypes.string,
  chooseTeachers: PropTypes.function,
  teachersCheckBox: PropTypes.object,
};

const ArtistListViewer = (props) => {
  const artistList = TeacherAPI.all().map((card) => (
    <div className="sideDrawerArtistItem" key={card.path}>
      <ArtistName
        author_name={card.name}
        chooseTeachers={props.chooseTeachers}
        teachersCheckBox={props.teachersCheckBox}
      />
    </div>
  ));
  return <>{artistList}</>;
};

ArtistListViewer.propTypes = {
  artists_info_personal: PropTypes.object,
  chooseTeachers: PropTypes.function,
  teachersCheckBox: PropTypes.object,
};

const sideDrawerTechniques = (props) => {
  const { technique, chooseTechnique, show } = props;

  let drawerClasses = ['sideDrawer'];
  if (show) {
    drawerClasses = ['sideDrawer', 'open'];
  }

  return (
    <form
      action="#"
      name="myFilterList"
      acceptCharset="utf-8"
      method="GET"
      className={drawerClasses.join(' ')}
    >
      <div className="sideDrawerTitle">Категорії</div>
      <ul className="sideDrawerTechniqueList">
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Акварель"
            name="technique"
            checked={technique['Акварель'] || false}
            onChange={chooseTechnique}
          />
          <label htmlFor="Акварель" className="sideDrawerTechniqueItemText">
            Акварель
          </label>
        </li>
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Рисунок"
            name="technique"
            checked={technique['Рисунок'] || false}
            onChange={chooseTechnique}
          />
          <label htmlFor="Рисунок" className="sideDrawerTechniqueItemText">
            Рисунок
          </label>
        </li>
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Олійний живопис"
            name="technique"
            checked={technique['Олійний живопис'] || false}
            onChange={chooseTechnique}
          />
          <label
            htmlFor="Олійний живопис"
            className="sideDrawerTechniqueItemText"
          >
            Олійний живопис
          </label>
        </li>
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Фотографія"
            name="technique"
            checked={technique['Фотографія'] || false}
            onChange={chooseTechnique}
          />
          <label htmlFor="Фотографія" className="sideDrawerTechniqueItemText">
            Фотографія
          </label>
        </li>
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Історія мистецтв"
            name="technique"
            checked={technique['Історія мистецтв'] || false}
            onChange={chooseTechnique}
          />
          <label
            htmlFor="Історія мистецтв"
            className="sideDrawerTechniqueItemText"
          >
            Історія мистецтв
          </label>
        </li>
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Ілюстрація"
            name="technique"
            checked={technique['Ілюстрація'] || false}
            onChange={chooseTechnique}
          />
          <label htmlFor="Ілюстрація" className="sideDrawerTechniqueItemText">
            Ілюстрація
          </label>
        </li>
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Декоративне"
            name="technique"
            checked={technique['Декоративне'] || false}
            onChange={chooseTechnique}
          />
          <label htmlFor="Декоративне" className="sideDrawerTechniqueItemText">
            Декоративне
          </label>
        </li>
        <li className="sideDrawerTechniqueItem">
          <input
            type="checkbox"
            id="Дитячі"
            name="technique"
            checked={technique['Дитячі'] || false}
            onChange={chooseTechnique}
          />
          <label htmlFor="Дитячі" className="sideDrawerTechniqueItemText">
            Дитячі
          </label>
        </li>
      </ul>
      <div className="sideDrawerWrapper">
        <div className="sideDrawerLine"></div>
        <div className="sideDrawerTitle">Ціна</div>
        <RangeInput onRangeChange={props.onRangeChange}/>
        <div className="sideDrawerLine"></div>
        <div className="sideDrawerArtistList">
          <label htmlFor="teacher" className="sideDrawerTitle">
            За викладачем
          </label>
          <ArtistListViewer
            chooseTeachers={props.chooseTeachers}
            teachersCheckBox={props.teachersCheckBox}
          />
        </div>
        <div className="buttonWrapper" onClick={props.setChanges}>
          <Button text="Застосувати" />
        </div>
      </div>
      <input
        className="clearButton"
        type="reset"
        name="username"
        value="Скинути фільтри"
        onClick={props.resetFilters}
      />
    </form>
  );
};

sideDrawerTechniques.propTypes = {
  show: PropTypes.boolean,
  technique: PropTypes.object,
  chooseTechnique: PropTypes.function,
  setChanges: PropTypes.function,
  chooseTeachers: PropTypes.function,
  teachersCheckBox: PropTypes.object,
  onRangeChange: PropTypes.function,
  resetFilters: PropTypes.function,
};

export default sideDrawerTechniques;
