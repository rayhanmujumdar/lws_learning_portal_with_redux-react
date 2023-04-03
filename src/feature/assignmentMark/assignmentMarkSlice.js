import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  total: 0,
  pending: 0,
  markSent: 0,
};

const assignmentMarkSlice = createSlice({
  name: "assignmentMarkSlice",
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.total = action.payload.length;
      state.pending = action.payload.filter(
        (assignmentMark) => assignmentMark.status === "pending"
      ).length;
      state.markSent = action.payload.filter(
        (assignmentMark) => assignmentMark.status === "published"
      ).length;
    },
  },
});

export default assignmentMarkSlice.reducer
export const {updateStatus} = assignmentMarkSlice.actions
