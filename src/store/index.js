import rootReducer from "../reducers/rootReducer";
import { createStore } from "redux";

export function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
