import '../style.css';
import { TextTile } from '../model';

export default function TextTileComponent({ title, text, color }: TextTile) {
  return (
    <div className={`contentTile ${color}`}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
}