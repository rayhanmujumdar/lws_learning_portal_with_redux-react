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
    })
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useGetRelatedQuizQuery,
} = quizApi;
