import "../style.css";
import { VerticalSplitter, ElementsType } from "../model";
import { RenderElement } from "../RenderElement";

export default function VerticalSplitterComponent({
  elements,
}: VerticalSplitter) {
  return (
    <div className="verticalSplitter">
      {elements.map((element: ElementsType) => (
        <div key={element.elementKey}>{RenderElement(element)}</div>
      ))}
    </div>
  );
}