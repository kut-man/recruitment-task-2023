import "../style.css";
import { TextTile } from "../model";

export default function TextTileComponent({ title, text, color }: TextTile) {
  return (
    <div className={"contentTile"} style={{ backgroundColor: `${color == "light" && "rgb(92, 95, 158)"}` }}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
}
