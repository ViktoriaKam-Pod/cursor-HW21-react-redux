import { combineReducers, createStore } from "redux";
import PublicationReducer from "./reducers/publication.reducers";



const reduser = {
  publicationReduser : PublicationReducer,
}
const rootReduser = combineReducers(reduser);

const store = createStore(rootReduser);

export default store;