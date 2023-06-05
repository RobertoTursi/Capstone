import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "..";

const store = configureStore({
    reducer: mainReducer
})

export default store