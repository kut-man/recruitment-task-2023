import * as React from 'react';
import './style.css';
import { VerticalSplitter as IVerticalSplitter, ElementsType } from '../model';

interface Props extends IVerticalSplitter {
  elements: ElementsType[]; 
}

export default function VerticalSplitter(props: Props) {
  const { elements } = props;
  return (
    <div>
      {elements.map((element, index) => (
        <div key={element.elementKey}>{/* render the element here */}</div>
      ))}
    </div>
  );
}
