import { apiSlice } from "../api/apiSlice";
import { submittedQuizMarkUpdatedCache } from "../leaderboard/leaderboardSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizMark: builder.query({
      query: (id) => `/quizMark?student_id_like=${id}`,
      providesTags: ["quizMark"],
    }),
    addQuizMark: builder.mutation({
      query: ({ data }) => ({
        url: `/quizMark`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["quizMark"],
      async onQueryStarted({ id }, { queryFulfilled, dispatch }) {
        try {
          const { data: quiz } = await queryFulfilled;
          if (quiz?.id) {
            dispatch(submittedQuizMarkUpdatedCache({ id, mark: quiz.mark }));
          }
        } catch {}
      },
    }),
  }),
});

export const { useGetQuizMarkQuery, useAddQuizMarkMutation } = quizMarkApi;
