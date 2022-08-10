import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './PurpleCowProgressBar.css';

function PurpleCowButton(props) {
  return (
    <>
      <ProgressBar now={props.now} max={props.max} animated variant="purple" />
    </>
  );
}

export default PurpleCowButton;
