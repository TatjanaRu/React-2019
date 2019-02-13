import { combineReducers } from "redux";
import { registerReducers, loginReducer } from "./userReducers";

const rootReducer = combineReducers({
    registerReducers,
    loginReducer
})

export default rootReducer;