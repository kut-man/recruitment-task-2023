import "../style.css";
import { HorizontalSplitter, ElementsType } from "../model";
import { RenderElement } from "../RenderElement";

export default function VerticalSplitterComponent({
  elements,
}: HorizontalSplitter) {
  return (
    <div className="horizontalSplitter">
      {elements.map((element: ElementsType) => (
        <div key={element.elementKey}>{RenderElement(element)}</div>
      ))}
    </div>
  );
}
