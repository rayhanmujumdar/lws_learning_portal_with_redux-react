import { apiSlice } from "../api/apiSlice";
export const assignmentMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAssignmentMark: builder.query({
      query: () => `/assignmentMark`,
    }),
    getAssignmentMark: builder.query({
      query: (id) => `/assignmentMark?student_id_like=${id}`,
      providesTags: ["assignmentMark"],
    }),
    addAssignmentMark: builder.mutation({
      query: (data) => ({
        url: `/assignmentMark`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["assignmentMark"],
    }),
    updateAssignmentMark: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignmentMark/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
        const optimisticUpdateMark = dispatch(
          apiSlice.util.updateQueryData(
            "getAllAssignmentMark",
            undefined,
            (draft) => {
              const markIndex = draft.findIndex(
                (assignmentMark) => assignmentMark.id == id
              );
              draft[markIndex] = data;
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (err) {
          optimisticUpdateMark.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllAssignmentMarkQuery,
  useGetAssignmentMarkQuery,
  useAddAssignmentMarkMutation,
  useUpdateAssignmentMarkMutation,
} = assignmentMarkApi;
