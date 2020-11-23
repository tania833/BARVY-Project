import React from 'react';

const About = () => {
  return <div>
    <h1>Це сторінка про нас</h1>
    <button onClick={handleClick}>Button</button>
  </div>
}

function handleClick() {
  console.log('---', 'clicked')
}

export default About