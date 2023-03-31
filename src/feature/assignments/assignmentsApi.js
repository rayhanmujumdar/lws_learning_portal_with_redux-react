import { apiSlice } from "../api/apiSlice";
export const assignmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignment: builder.query({
      query: (id) => `/assignments?video_id_like=${id}`,
    }),
    addSubmitted: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignments/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetAssignmentQuery, useAddSubmittedMutation } = assignmentApi;
