import React, { useState } from 'react';
import RangeInput from './RangeInput';
import './SideDrawerTechniques.scss';
import Button from '../../../components/Button';
import PropTypes from 'prop-types';
import TeacherAPI from '../../../MOCKS/TeacherAPI';

const ArtistName = (props) => {
  return (
    <>
      <input type="checkbox" id={props.author_name} name="author_name" />
      <label htmlFor={props.author_name}>{props.author_name}</label>
    </>
  );
};

ArtistName.propTypes = {
  author_name: PropTypes.string,
};

const ArtistListViewer = () => {
  const artistList = TeacherAPI.all().map((card) => (
    <div className="sideDrawerArtistItem" key={card.path}>
      <ArtistName author_name={card.name} />
    </div>
  ));
  return <>{artistList}</>;
};

ArtistListViewer.propTypes = {
  artists_info_personal: PropTypes.object,
};

const sideDrawerTechniques = (props) => {
  let drawerClasses = ['sideDrawer'];
  if (props.show) {
    drawerClasses = ['sideDrawer', 'open'];
  }

  const [technique, setTechnique] = useState({
    ['Акварель']: false,
    ['Рисунок']: false,
    ['Олійний живопис']: false,
    ['Фотографія']: false,
    ['Історія мистецтв']: false,
    ['Ілюстрація']: false,
    ['Декоративне']: false,
    ['Дитячі']: false,
  });
  const chooseTechnique = (event) => {
    setTechnique(event.target.innerText);
  };
  console.log(technique);

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
            checked={technique['Акварель']}
            onClick={chooseTechnique}
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
            checked={technique['Рисунок']}
            onClick={chooseTechnique}
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
            checked={technique['Олійний живопис']}
            onClick={chooseTechnique}
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
            checked={technique['Фотографія']}
            onClick={chooseTechnique}
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
            checked={technique['Історія мистецтв']}
            onClick={chooseTechnique}
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
            checked={technique['Ілюстрація']}
            onClick={chooseTechnique}
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
            checked={technique['Декоративне']}
            onClick={chooseTechnique}
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
            checked={technique['Дитячі']}
            onClick={chooseTechnique}
          />
          <label htmlFor="Дитячі" className="sideDrawerTechniqueItemText">
            Дитячі
          </label>
        </li>
      </ul>
      <div className="sideDrawerWrapper">
        <div className="sideDrawerLine"></div>
        <div className="sideDrawerTitle">Ціна</div>
        <RangeInput />
        <div className="sideDrawerLine"></div>
        <div className="sideDrawerArtistList">
          <label htmlFor="teacher" className="sideDrawerTitle">
            За викладачем
          </label>
          <ArtistListViewer />
        </div>
        <div className="buttonWrapper">
          <Button text="Застосувати" />
        </div>
      </div>
      <input
        className="clearButton"
        type="reset"
        name="username"
        value="Скинути фільтри"
      />
    </form>
  );
};

export default sideDrawerTechniques;
