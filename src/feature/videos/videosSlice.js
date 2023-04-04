import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    trackId: null
}

const videoSlice = createSlice({
    name: "videoSlice",
    initialState,
    reducers: {
        trackVideoId: (state,action) => {
            state.trackId = action.payload
        }
    }
})

export default videoSlice.reducer
export const {trackVideoId} = videoSlice.actions