import { apiSlice } from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => `/quizzes`,
    }),
    getQuiz: builder.query({
      query: (id) => `/quizzes/${id}`,
    }),
    getRelatedQuiz: builder.query({
      query: (id) => `/quizzes?video_id_like=${id}`,
    }),
    addQuiz: builder.mutation({
      query: (data) => ({
        url: "/quizzes",
        method: "POST",
        body: data,
      }),
    }),
    editQuiz: builder.mutation({
      query: ({ id, data }) => ({
        url: `/quizzes/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        const optimisticDelete = dispatch(
          apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
            return draft.filter((quiz) => quiz.id != id);
          })
        );
        try {
          await queryFulfilled;
        } catch (err) {
          optimisticDelete.undo();
        }
      },
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useGetRelatedQuizQuery,
  useAddQuizzesMutation,
  useEditQuizzesMutation,
  useDeleteQuizMutation,
} = quizApi;
