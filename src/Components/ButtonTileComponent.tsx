import { useContext } from "react";
import "../style.css";
import { ButtonTile as ButtonTile } from "../model";
import { Context } from "../Context";
import { ElementsType, Action } from "../model";

export default function ButtonTileComponent({ text, action }: ButtonTile) {
  let [data, setData] = useContext(Context);

  const handleButtonClick = (action: Action): void => {
    const referenceElementKey = action.referenceElementKey;
    const newSourceValue = action.value;

    function traverseObject(obj: any) {
      for (const prop in obj) {
        if (typeof obj[prop] === "object") {
          traverseObject(obj[prop]);
        } else if (prop === "elementKey" && obj[prop] === referenceElementKey) {
          obj[Object.keys(newSourceValue)[0]] =
            newSourceValue[Object.keys(newSourceValue)[0]];
        }
      }
      return obj;
    }
    const updatedData = Object.assign({}, traverseObject(data)) ;
    setData(updatedData);
  };

  return (
    <button className="contentTile" onClick={() => handleButtonClick(action)}>
      {text}
    </button>
  );
}
