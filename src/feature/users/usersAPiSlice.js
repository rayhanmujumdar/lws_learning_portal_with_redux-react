import { apiSlice } from "../../feature/api/apiSlice";
import { assignmentMarkSlice } from "../assignmentMark/assignmentMarkSlice";
import { addToLeaderboard } from "../leaderboard/leaderboardSlice";
import { quizMarkApi } from "../quizMark/quizMarkAPi";
export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: users } = await queryFulfilled;
          for (const user of users) {
            const { data: quizMark } = await dispatch(
              quizMarkApi.endpoints.getQuizMark.initiate(user?.id)
            );
            const { data: assignmentMark } = await dispatch(
              assignmentMarkSlice.endpoints.getAssignmentMark.initiate(user?.id)
            );
            let totalQuizMark = 0;
            let totalAssignmentMark = 0;
            if (quizMark.length > 0) {
              totalQuizMark = quizMark.reduce((acc, cur) => {
                acc = acc + cur.mark;
                return acc;
              }, 0);
            }
            if (assignmentMark.length > 0) {
              totalAssignmentMark = assignmentMark.reduce((acc, cur) => {
                acc = acc + cur.mark;
                return acc;
              }, 0);
            }
            const totalMark = totalAssignmentMark + totalQuizMark;
            const userResult = {
              ...user,
              totalQuizMark,
              totalAssignmentMark,
              totalMark,
            };
            dispatch(addToLeaderboard(userResult));
          }
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersSlice;
