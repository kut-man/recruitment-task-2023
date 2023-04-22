import * as React from 'react';
import './style.css';
import { TextTile } from './model';

const TextTileComponent: React.FC<TextTile> = ({ title, text, color }) => {
  return (
    <div className={`text-tile ${color}`}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
}

export default TextTileComponent;