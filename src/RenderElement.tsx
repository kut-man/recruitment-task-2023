import HorizontalSplitterComponent from "./Components/HorizontalSplitterComponent";
import VerticalSplitterComponent from "./Components/VerticalSplitterComponent";
import ImageTileComponent from "./Components/ImageTileComponent";
import TextTileComponent from "./Components/TextTileComponent";
import ButtonTile from "./Components/ButtonTileComponent";
import { ElementsType } from "./model";

export const RenderElement = (element: ElementsType) => {
  switch (element.type) {
    case "imageTile":
      return <ImageTileComponent {...element} />;
    case "textTile":
      return <TextTileComponent {...element} />;
    case "buttonTile":
      return <ButtonTile {...element} />;
    case "horizontalSplitter":
      return <HorizontalSplitterComponent {...element} />;
    case "verticalSplitter":
      return <VerticalSplitterComponent {...element} />;
    default:
      return null;
  }
};
