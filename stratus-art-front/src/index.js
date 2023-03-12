import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
