import '../style.css';
import { TextTile } from '../model';

export function TextTileComponent({ title, text, color }: TextTile) {
  return (
    <div className={`text-tile ${color}`}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
}