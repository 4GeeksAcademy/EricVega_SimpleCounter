// secondscounter.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function SecondsCounter({ seconds }) {
  const digit6 = Math.floor(seconds / 100000) % 10;
  const digit5 = Math.floor(seconds / 10000) % 10;
  const digit4 = Math.floor(seconds / 1000) % 10;
  const digit3 = Math.floor(seconds / 100) % 10;
  const digit2 = Math.floor(seconds / 10) % 10;
  const digit1 = seconds % 10;

  return (
    <div className="seconds-counter">
      <div className="icon">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="digit">{digit6}</div>
      <div className="digit">{digit5}</div>
      <div className="digit">{digit4}</div>
      <div className="digit">{digit3}</div>
      <div className="digit">{digit2}</div>
      <div className="digit">{digit1}</div>
    </div>
  );
}

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;


