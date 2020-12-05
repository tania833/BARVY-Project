import React from 'react';
import './SideDrawerTechniques.scss';

const sideDrawerTechniques = (props) => {
  let drawerClasses = ['sideDrawer'];
  if (props.show) {
    drawerClasses = ['sideDrawer', 'open'];
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <ul className="sideDrawerList">
        <li className="sideDrawerItem">
          <a href="/techniques">Акварель</a>
        </li>
        <li className="sideDrawerItem">
          <a href="/events">Рисунок</a>
        </li>
        <li className="sideDrawerItem">
          <a href="/about">Олійний живопис</a>
        </li>
        <li className="sideDrawerItem">
          <a href="/">Фотографія</a>
        </li>
        <li className="sideDrawerItem">
          <a href="/">Історія мистецтв</a>
        </li>
        <li className="sideDrawerItem">
          <a href="/events">Ілюстрація</a>
        </li>
        <li className="sideDrawerItem">
          <a href="/artists">Декоративне</a>
        </li>
        <li className="sideDrawerItem">
          <a href="/artists">Дитяче</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawerTechniques;
