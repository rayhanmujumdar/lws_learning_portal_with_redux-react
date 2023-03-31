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
      async onQueryStarted({ videoId }, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignment",
              videoId.toString(),
              (draft) => {
                const index = draft.findIndex(
                  (assignment) => assignment.video_id === videoId
                );
                draft[index].isSubmit = true;
              }
            )
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetAssignmentQuery, useAddSubmittedMutation } = assignmentApi;
