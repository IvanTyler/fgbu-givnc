import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getDataReucer } from "../reducers/getDataReducer";

const rootReducer = combineReducers({
    data: getDataReucer,
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default store