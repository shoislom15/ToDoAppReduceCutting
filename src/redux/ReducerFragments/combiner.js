import { combineReducers } from "redux";
import DataControl from "./DataControl";
import LayoutControl from "./LayoutControl";

const reducer = combineReducers({ DataControl, LayoutControl })

export default reducer;