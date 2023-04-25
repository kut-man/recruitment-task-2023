import * as React from "react";
import "./style.css";
import { ElementsType } from "./model";
import { RenderElement } from "./RenderElement";
import { createContext } from "react";

export const Context = createContext<any>(null);

export default function App() {
  // load definition here

  const [data, setData] = React.useState<ElementsType>();

  React.useEffect(() => {
    const render = async () => {
      let uri = "http://localhost:8080/rootElement";
      const res = await fetch(uri);
      const data = await res.json();
      setData(data);
    };
    render();
  }, []);

  return (
    <div className="main">
      {/* TODO remove title usage from template */}
      <h1>{"Place you components here 👇"}</h1>
      <div className="content">
        <Context.Provider value={setData}>
          {data ? RenderElement(data) : <p>Loading...</p>}
        </Context.Provider>
      </div>
    </div>
  );
}
