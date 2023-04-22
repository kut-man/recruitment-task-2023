import * as React from 'react';
import './style.css';
import { HorizontalSplitter } from '../model';

type HorizontalSplitterProps = {
  elements: HorizontalSplitter['elements'];
}

export default function HorizontalSplitter({ elements }: HorizontalSplitterProps) {
  return (
    <div>
      {elements.map((element) => {
        switch (element.type) {
          case 'textTile':
            return <div>{element.title}</div>
          case 'imageTile':
            return <img src={element.source} alt={element.title} />
          // Add cases for other element types as needed
          default:
            return null;
        }
      })}
    </div>
  );
}
