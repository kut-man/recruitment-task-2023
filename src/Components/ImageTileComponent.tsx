import "../style.css";
import { ImageTile } from "../model";

export default function ImageTileComponent({ title, source }: ImageTile) {
  return <img className="contentTile" src={source} alt={title} />;
}