import { apiSlice } from "../../feature/api/apiSlice";
export const assignmentMarkSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentMark: builder.query({
      query: (id) => `/assignmentMark?student_id_like=${id}`,
    }),
  }),
});

export const { useGetAssignmentMarkQuery } = assignmentMarkSlice;
