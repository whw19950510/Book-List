import {combineReducers} from "redux";
import BooksReducer from "./reducer_books";
import ActivebookReducer from "./reducer_activebook";
const rootReducer = combineReducers({
    books:BooksReducer,
    activeBook:ActivebookReducer
});

export default rootReducer;