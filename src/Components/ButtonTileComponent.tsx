import { useContext } from "react";
import "../style.css";
import { ButtonTile } from "../model";
import { Context } from "../App";
import { Action } from "../model";

export default function ButtonTileComponent({ text, action }: ButtonTile) {
  const setData = useContext(Context);

  const handleButtonClick = ({ referenceElementKey, value }: Action): void => {
    function traverseObject(obj: any) {
      for (const prop in obj) {
        if (typeof obj[prop] === "object") {
          traverseObject(obj[prop]);
        } else if (prop === "elementKey" && obj[prop] === referenceElementKey) {
          obj[Object.keys(value)[0]] = value[Object.keys(value)[0]];
        }
      }
      return obj;
    }
    setData((prevData: any) => {
      const updatedData = traverseObject({ ...prevData });
      return updatedData;
    });
  };

  return (
    <button className="contentTile" onClick={() => handleButtonClick(action)}>
      {text}
    </button>
  );
}
