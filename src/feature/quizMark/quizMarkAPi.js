import { apiSlice } from "../api/apiSlice";
import { submittedQuizMarkUpdatedCache } from "../leaderboard/leaderboardSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizMark: builder.query({
      query: (id) => `/quizMark?student_id_like=${id}`,
    }),
    addQuizMark: builder.mutation({
      query: ({ data }) => ({
        url: `/quizMark`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ id }, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.id) {
            dispatch(submittedQuizMarkUpdatedCache({ id, mark: data.mark }));
          }
        } catch {}
      },
    }),
  }),
});

export const { useGetQuizMarkQuery, useAddQuizMarkMutation } = quizMarkApi;
