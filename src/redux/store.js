'use client';
import { configureStore } from "@reduxjs/toolkit"
import HamburgerSlice from "./slices/hamburger"

const store = configureStore({
    reducer: {
        hamburger: HamburgerSlice,
    }
})

export default store