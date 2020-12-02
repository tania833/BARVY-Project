import React from 'react';
import sprite from '../../sprite.svg';

export const Sprite = () => {
  return (
    <div>
      <svg>
        <use href={sprite + '#facebook'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#cart_mobile'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#empty_cart'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#full_cart'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#heart'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#instagram'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#mail'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#Menu_mobile'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#messenger'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#pinterest'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#search'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#telegram'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#trash'} className="" />
      </svg>
      <svg>
        <use href={sprite + '#twitter'} className="" />
      </svg>
    </div>
  );
};
