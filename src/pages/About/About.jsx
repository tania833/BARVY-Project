import React, { useEffect } from 'react';
import Barvy from './components/Barvy/Barvy';
import Ship from './components/Ship/Ship';
import Start from './components/Start/Start';
import HowItWorks from '../Main/components/HowItWorks/HowItWorks';
import { BarvyProps } from './components/Barvy/Barvy_props';
import TitleBarvy from './components/Title/TitleBarvy';
import Breadcrumb from '../../components/Breadcrumb';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let width = window.innerWidth;
  let breadcrumbs;
  if (width < 768) {
    breadcrumbs = '';
  } else {
    breadcrumbs = (
      <Breadcrumb main_menu_item="Про нас" main_menu_item_link="/about" />
    );
  }
  return (
    <>
      {breadcrumbs}
      <TitleBarvy />
      <Barvy barvyProps={BarvyProps[0]} />
      <Ship />
      <Start />
      <HowItWorks title="старт" subtitle="як почати?" />
      <Barvy barvyProps={BarvyProps[1]} />
    </>
  );
};

export default About;
