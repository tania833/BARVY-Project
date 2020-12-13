import React from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from '../../MOCKS/PlayerAPI';

const FullArtists = () => {
  return (
    <div>
      <ul>
        {PlayerAPI.all().map((p) => (
          <li key={p.number}>
            <Link to={`/artists/${p.number}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FullArtists;
