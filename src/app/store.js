import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";
import authReducer from "../feature/auth/authSlice";
import leaderboardReducer from "../feature/leaderboard/leaderboardSlice";
import quizReducer from "../feature/quizzes/quizSlice";
import assignmentMarkReducer from "../feature/assignmentMark/assignmentMarkSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    quiz: quizReducer,
    auth: authReducer,
    leaderboard: leaderboardReducer,
    assignmentMarkStatus: assignmentMarkReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
