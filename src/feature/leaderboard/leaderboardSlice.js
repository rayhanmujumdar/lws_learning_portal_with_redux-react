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
      state.leaderboard = action.payload;
    },
    addMyRank: (state, action) => {
      console.log(action.payload);
      const userIndex = state.leaderboard.findIndex(
        (userResult) => userResult.id === action.payload
      );
      const myRank = state.leaderboard[userIndex];
      state.myRank = { ...myRank, rankNo: userIndex + 1 };
    },
    submittedQuizMarkUpdatedCache: (state, action) => {
      const { id, mark } = action.payload;
      const userIndex = state.leaderboard.findIndex((user) => user.id === id);
      const newUserResult = { ...state.leaderboard[userIndex] };
      newUserResult.totalMark += mark;
      newUserResult.totalQuizMark += mark;
      state.leaderboard[userIndex] = newUserResult;
      const sortingUser = state.leaderboard.sort(
        (a, b) => b.totalMark - a.totalMark
      );
      const updatedRank = state.leaderboard.findIndex(
        (userResult) => userResult.id === id
      );
      state.leaderboard = sortingUser;
      state.myRank = { ...newUserResult, rankNo: updatedRank + 1 };
    },
  },
});

export default leaderboardSlice.reducer;
export const { addToLeaderboard, addMyRank, submittedQuizMarkUpdatedCache } =
  leaderboardSlice.actions;
