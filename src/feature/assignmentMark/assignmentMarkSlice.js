import { apiSlice } from "../../feature/api/apiSlice";
export const assignmentMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentMark: builder.query({
      query: (id) => `/assignmentMark?student_id_like=${id}`,
    }),
    addAssignment: builder.mutation({
      query: (data) => ({
        url: `/assignmentMark`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAssignmentMarkQuery,useAddAssignmentMutation } = assignmentMarkApi;
