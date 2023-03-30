import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  accessToken: undefined,
  user: undefined,
  videoId: undefined,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    loggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
  },
});
export default authSlice.reducer;
export const { loggedOut, loggedUser,setVideoId } = authSlice.actions;
