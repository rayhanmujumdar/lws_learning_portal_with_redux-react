import { apiSlice } from "../api/apiSlice";
export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `/videos`,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.length > 0) {
            localStorage.setItem("videoId", JSON.stringify(data[0].id));
          }
        } catch (err) {}
      },
    }),
    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: `/videos`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: video } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
              draft.push(video);
            })
          );
        } catch (err) {}
      },
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
        const optimisticEdit = dispatch(
          apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
            const videoIndex = draft.findIndex((video) => video.id === id);
            draft[videoIndex] = data;
          })
        );
        try {
          await queryFulfilled;
        } catch (err) {
          optimisticEdit.undo();
        }
      },
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const optimisticDelete = dispatch(
          apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
            const remainingVideo = draft.filter((video) => video.id !== id);
            return remainingVideo;
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
  useGetVideosQuery,
  useGetVideoQuery,
  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = videosApi;
