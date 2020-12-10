import React, { useState } from 'react';
import RangeInput from './RangeInput';
import './SideDrawerTechniques.scss';
import Button from '../../../components/Button';
import PropTypes from 'prop-types';
import artists_info_personal from '../../../MOCKS/artist_personal_page_MOCK';

const ArtistName = (props) => {
  return (
    <div className="sideDrawerItemArtist">
      <input type="checkbox" id="name" name="author_name" />
      <label htmlFor="name">{props.author_name}</label>
    </div>
  );
};

ArtistName.propTypes = {
  author_name: PropTypes.string,
};

const ArtistListViewer = (props) => {
  const artistList = props.artists_info_personal.map((card) => (
    <div key={card.id}>
      <ArtistName author_name={card.artist.name} />
    </div>
  ));
  return <div>{artistList}</div>;
};

ArtistListViewer.propTypes = {
  artists_info_personal: PropTypes.object,
};

const sideDrawerTechniques = (props) => {
  let drawerClasses = ['sideDrawer'];
  if (props.show) {
    drawerClasses = ['sideDrawer', 'open'];
  }

  const [technique, setTechnique] = useState('');
  const chooseTechnique = (event) => {
    setTechnique(event.target.innerText);
  };
  console.log(technique);

  return (
    <form className={drawerClasses.join(' ')}>
      <div className="sideDrawerTitle">Категорії</div>
      <ul className="sideDrawerList">
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Акварель
          </span>
        </li>
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Рисунок
          </span>
        </li>
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Олійний живопис
          </span>
        </li>
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Фотографія
          </span>
        </li>
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Історія мистецтв
          </span>
        </li>
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Ілюстрація
          </span>
        </li>
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Декоративне
          </span>
        </li>
        <li className="sideDrawerItem">
          <span onClick={chooseTechnique} className="sideDrawerItemText">
            Дитячі
          </span>
        </li>
      </ul>
      <div className="sideDrawerWrapper">
        <div className="sideDrawerLine"></div>
        <div className="sideDrawerTitle">Ціна</div>
        <RangeInput />
        <div className="sideDrawerLine"></div>
        <div>
          <label htmlFor="teacher" className="sideDrawerTitle">
            За викладачем
          </label>
          <ArtistListViewer artists_info_personal={artists_info_personal} />
        </div>
        <Button text="Застосувати" />
      </div>
    </form>
  );
};

export default sideDrawerTechniques;
