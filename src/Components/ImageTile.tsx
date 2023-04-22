import * as React from 'react';
import './style.css';
import { ImageTile } from '../model';

const ImageTileComponent: React.FC<ImageTile> = ({ title, source }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={source} alt={title} />
    </div>
  );
}

export default ImageTileComponent;