import * as React from 'react';
import './style.css';
import { ButtonTile as ButtonTileProps } from '../model';

const ButtonTile: React.FC<ButtonTileProps> = ({ text, action, elementKey }) => {
  const handleButtonClick = () => {
    // handle the button click action
  };

  return (
    <div className="button-tile">
      <button onClick={handleButtonClick}>{text}</button>
    </div>
  );
}

export default ButtonTile;