import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";


const reducer = combineReducers({
    reducer: rootReducer
})

export default configureStore({
    reducer: reducer
})