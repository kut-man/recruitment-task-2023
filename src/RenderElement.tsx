import VerticalSplitterComponent from './Components/VerticalSplitterComponent';
import ImageTileComponent from './Components/ImageTileComponent';
import TextTileComponent from './Components/TextTileComponent';
import { ElementsType } from './model';
import ButtonTile from './Components/ButtonTileComponent';
import HorizontalSplitterComponent from './Components/HorizontalSplitterComponent';

export const RenderElement = (element: ElementsType) => {
    switch (element.type) {
        case 'imageTile':
            return <ImageTileComponent { ...element } />;
        case 'textTile':
            return <TextTileComponent { ...element } />;
        case 'buttonTile':
            return <ButtonTile { ...element } />;
        case 'horizontalSplitter':
            return <HorizontalSplitterComponent { ...element } />;
        case 'verticalSplitter':
            return <VerticalSplitterComponent { ...element } />;
        default:
            return null;
    }
};