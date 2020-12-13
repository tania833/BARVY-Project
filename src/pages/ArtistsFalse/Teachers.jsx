import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerAPI from '../../MOCKS/PlayerAPI';

const Teachers = (props) => {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>Position: {player.position}</h2>
      <Link to="/artists">Back</Link>
    </div>
  );
};

Teachers.propTypes = {
  match: PropTypes.string,
};

export default Teachers;
