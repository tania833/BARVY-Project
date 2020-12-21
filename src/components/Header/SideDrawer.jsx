import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss';

const sideDrawer = (props) => {
  let drawerClasses = ['side_drawer'];
  if (props.show) {
    drawerClasses = ['side_drawer', 'open'];
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <ul className="side_drawer__list">
        <li className="side_drawer__item">
          <Link to="/artists">Викладачі</Link>
        </li>
        <li className="side_drawer__item">
          <Link to="/techniques">Курси</Link>
        </li>
        <li className="side_drawer__item">
          <Link to="/events">Події</Link>
        </li>
        <li className="side_drawer__item">
          <Link to="/about">Про нас</Link>
        </li>
        <li className="side_drawer__item">
          <Link to="/contacts">Контакти</Link>
        </li>
        <li className="side_drawer__item">
          <Link to="/#howItWorks">Як це працює</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
