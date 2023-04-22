import '../style.css';
import { ButtonTile as ButtonTile } from '../model';

export function ButtonTileComponent({ text, action, elementKey }: ButtonTile) {
  const handleButtonClick = () => {
    // handle the button click action
  };

  return (
    <div className="button-tile">
      <button onClick={handleButtonClick}>{text}</button>
    </div>
  );
}

export default ButtonTileComponent;