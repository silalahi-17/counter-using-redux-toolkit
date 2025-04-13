import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/reducer";
// import counterReducer from './features/Counter/reducer'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
export default store;