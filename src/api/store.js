import { createStore } from "redux";
import reducer from "./reducer";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //obviamente este segundo parametro es solo para desarrollo y para poder visualizar la consola de redux, para produccion deberiamos sacarlo.

export default store;
