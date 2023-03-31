import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderboard: [],
  myRank: {},
};

const leaderboardSlice = createSlice({
  name: "leaderboardSlice",
  initialState,
  reducers: {
    addToLeaderboard: (state, action) => {
      state.leaderboard.push(action.payload);
    },
  },
});

export default leaderboardSlice.reducer;
export const { addToLeaderboard } = leaderboardSlice.actions;
