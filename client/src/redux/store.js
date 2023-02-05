import { configureStore, combineReducers } from "@reduxjs/toolkit";

/**引入多個Reducers */
import questionReducer from "../redux/reducer/questions";
import resultReducer from "../redux/reducer/result";

//引入多個reducer 整合在rootReducer
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

//建立reducers
export default configureStore({ reducer: rootReducer });
