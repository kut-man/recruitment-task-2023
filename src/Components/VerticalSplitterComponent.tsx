import '../style.css';
import { VerticalSplitter } from '../model';
import { RenderElement } from '../renderElement';

export default function VerticalSplitterComponent(data: VerticalSplitter) {
  const elements = data.elements;

  return (
    <div>VerticalSplit
      {elements.map((element) => RenderElement(element))}
    </div>
  );
}