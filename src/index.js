import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/layout/App";
import { Provider } from "react-redux";
import store from "./api/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
); //al embeber toda la aplicacion en <BrowserRouter> estoy habilitado a usar todos los componentes de rutas.
