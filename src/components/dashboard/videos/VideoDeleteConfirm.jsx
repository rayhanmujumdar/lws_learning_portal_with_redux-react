import React, { useEffect } from "react";
import { useDeleteVideoMutation } from "../../../feature/videos/videosApi";

export default function VideoDeleteConfirm({ control, videoId }) {
  const [deleteVideo, { isSuccess }] = useDeleteVideoMutation();
  useEffect(() => {
    if (isSuccess) {
      control(false);
    }
  }, [isSuccess]);
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-4xl text-center">Are you sure?</h1>
      <div className="flex justify-evenly items-center gap-x-4">
        <button
          onClick={() => control(false)}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          onClick={() => deleteVideo(videoId)}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-green-500"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
