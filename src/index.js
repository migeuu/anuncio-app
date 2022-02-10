import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./routes";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
