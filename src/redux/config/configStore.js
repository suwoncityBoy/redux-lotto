import { createStore } from "redux";
import { combineReducers } from "redux";

import lotto from "../modules/lotto";

const rootReducer = combineReducers({
  lotto: lotto,
});
const store = createStore(rootReducer);

export default store;
