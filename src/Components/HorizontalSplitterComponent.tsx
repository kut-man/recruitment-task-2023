import '../style.css';
import { HorizontalSplitter } from '../model';
import { RenderElement } from '../renderElement';

export default function VerticalSplitterComponent(data: HorizontalSplitter) {
  const elements = data.elements;

  return (
    <div>HorizontalSplit
      {elements.map((element) => RenderElement(element))}
    </div>
  );
}