import "../style.css";
import { VerticalSplitter } from "../model";
import RenderElement from "../RenderElement";

export default function VerticalSplitterComponent(data: VerticalSplitter) {
  const elements = data.elements;
  return (
    <div className="verticalSplitter">
      {elements.map((element) => (
        <div key={element.elementKey}>
          {" "}
          <RenderElement element={element} />{" "}
        </div>
      ))}
    </div>
  );
}
