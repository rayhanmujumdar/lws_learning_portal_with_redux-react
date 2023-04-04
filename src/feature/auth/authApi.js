import { apiSlice } from "../api/apiSlice";
import { loggedUser } from "./authSlice";
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({data}) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["leaderboard"],
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch(loggedUser(data));
        } catch (err) {}
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["leaderboard"],
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch(loggedUser(data));
        } catch (err) {}
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
