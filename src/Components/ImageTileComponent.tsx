import '../style.css';
import { ImageTile } from '../model';

export function ImageTileComponent({ title, source }: ImageTile) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={source} alt={title} />
    </div>
  );
}