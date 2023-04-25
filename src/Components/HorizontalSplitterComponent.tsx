import "../style.css";
import { HorizontalSplitter } from "../model";
import RenderElement from "../RenderElement";

export default function VerticalSplitterComponent(data: HorizontalSplitter) {
  const elements = data.elements;
  return (
    <div className="horizontalSplitter">
      {elements.map((element) => (
        <div key={element.elementKey}>
          <RenderElement element={element} />
        </div>
      ))}
    </div>
  );
}
