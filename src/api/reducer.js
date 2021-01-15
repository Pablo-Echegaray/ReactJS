import { combineReducers } from "redux";
import App from "./reducers/App";
import Contador from "./reducers/Contador";
import Usuarios from "./reducers/Usuarios";

let reducer = combineReducers({ App, Contador, Usuarios }); //nos combina todos los reducers en uno solo. Ahora nuestro store va a ser store.App.links - store.Contador.contador - store.Usuarios.usuarios

export default reducer;
