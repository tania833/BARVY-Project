import React from "react";
import "./SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = ['side_drawer'];
  if (props.show) {
    drawerClasses = ['side_drawer', 'open'];
  }
  return (
  <nav className={drawerClasses.join(' ')}>
    <ul className='side_drawer__list'>
      <li className='side_drawer__item'>
        <a href="/techniques">Курси</a>
      </li>
      <li className='side_drawer__item'>
        <a href="/events">Майстер-класи</a>
      </li>
      <li className='side_drawer__item'>
        <a href="/about">Про нас</a>
      </li>
      <li className='side_drawer__item'>
        <a href="/">Контакти</a>
      </li>
      <li className='side_drawer__item'>
        <a href="/">Як це працює</a>
      </li>
      <li className='side_drawer__item'>
        <a href="/events">Події</a>
      </li>
      <li className='side_drawer__item'>
        <a href="/artists">Викладачі</a>
      </li>
    </ul>
  </nav>
  )
};

export default sideDrawer;
