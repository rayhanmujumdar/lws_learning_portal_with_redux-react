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
    updateQuizSubmit: builder.mutation({
      query: ({ id, data }) => ({
        url: `/quizzes/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ videoId }, { dispatch, queryFulfilled }) {
        try {
          const { data: submittedQuiz } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getRelatedQuiz",
              videoId.toString(),
              (draft) => {
                const quizIndex = draft.findIndex(
                  (quiz) => quiz.video_id == videoId
                );
                draft[quizIndex] = submittedQuiz;
              }
            )
          );
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useGetRelatedQuizQuery,
  useUpdateQuizSubmitMutation,
} = quizApi;
