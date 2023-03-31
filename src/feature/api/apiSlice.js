import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { loggedOut } from "../auth/authSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:9000",
  prepareHeaders: async (headers, { getState }) => {
    const token = await getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
export const apiSlice = createApi({
  reducerPath: "api",
  keepUnusedDataFor: 600,
  baseQuery: async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption);
    if (result?.error && result?.error?.status === 401) {
      api.dispatch(loggedOut());
    }
    return result;
  },
  endpoints: (builder) => ({}),
});
