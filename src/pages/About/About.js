import React from 'react';

const About = () => {
  return (
    <div>
      <h1>Це сторінка про нас</h1>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

function handleClick() {
  console.log('---', 'clicked');
}

export default About;

// import React from 'react';
// import Barvy from './components/Barvy/Barvy';
// import Ship from './components/Ship/Ship';
// import Start from './components/Start/Start';
// import HowItWorks from '../Main/components/HowItWorks/HowItWorks';
// import { BarvyProps } from './components/Barvy/Barvy_props';
// import TitleBarvy from './components/Title/TitleBarvy';

// const About = () => {
//   return (
//     <>
//       <TitleBarvy />
//       <Barvy barvyProps={BarvyProps[0]} />
//       <Ship />
//       <Start />
//       <HowItWorks title="старт" subtitle="як почати?" />
//       <Barvy barvyProps={BarvyProps[1]} />
//     </>
//   );
// };

// export default About;
