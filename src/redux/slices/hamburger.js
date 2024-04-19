import { createSlice } from "@reduxjs/toolkit"

const initState = {
    show: false,
}

const HamburgerSlice = createSlice({
    name: "agent",
    initialState: initState,
    reducers: {
        toggleHamburger: (state, action) => {
            state.show = action.payload
        },
    },
})

export const { toggleHamburger } = HamburgerSlice.actions
export default HamburgerSlice.reducer