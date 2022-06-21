import { combineReducers, createStore } from "redux";
import { TareaReducers } from "../reducers/TareaReducers";

const reducers = combineReducers({
    tareaStore: TareaReducers
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);