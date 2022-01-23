import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './features/infoSlice'

export default configureStore({
    reducer: {
        student : studentReducer,
    }
})
