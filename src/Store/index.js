import rootReducer from "../Reducers/rootReducer";
import { createStore } from "redux";

export function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
