import React, { useEffect, useState } from "react";
import TextInput from "../ui/TextInput";
import NumberInput from "../ui/numberInput";
import { useGetVideosQuery } from "../../feature/videos/videosApi";
import {
  useAddAssignmentMutation,
  useGetAssignmentsQuery,
} from "../../feature/assignments/assignmentsApi";
import filterAssignmentVideo from "../../utils/filterAssingmentVideo";

export default function AddAssignmentFrom({ control }) {
  const [title, setTitle] = useState("");
  const [totalMark, setTotalMark] = useState("");
  const [videoId, setVideoId] = useState(null);
  const { data: videos } = useGetVideosQuery();
  const { data: assignments } = useGetAssignmentsQuery();
  const [addAssignment, { isSuccess, isLoading, isError }] =
    useAddAssignmentMutation();
  const remainingAssignmentVideo = filterAssignmentVideo(assignments, videos);
  useEffect(() => {
    if (isSuccess) {
      control(false);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id: video_id, title: video_title } = videos.find(
      (video) => video.id == videoId
    );
    addAssignment({
      title,
      video_id,
      video_title,
      totalMark: Number(totalMark),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                title="Assignment Title"
                placeholder="Title"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
              <NumberInput
                onChange={(e) => setTotalMark(e.target.value)}
                title="Assignment mark"
                placeholder="Mark"
                value={totalMark}
                min={0}
                max={200}
                required
              />
            </div>
            <div className="col-span-6">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="videoTitle"
              >
                Video title
              </label>
              <select
                onChange={(e) => setVideoId(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block text-lg pl-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 text-gray-600"
                name="videoTitle"
                required
              >
                <option value="" hidden>
                  {remainingAssignmentVideo?.length > 0
                    ? "choose assignment video title"
                    : "All video assignments was already added"}
                </option>
                {remainingAssignmentVideo?.map((video) => (
                  <option key={video?.id} value={video?.id}>
                    {video?.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex justify-between bg-[#080E1B] text-right sm:px-6">
          <button
            onClick={() => control(false)}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-green-500"
          >
            Save
          </button>
        </div>
      </div>
      {isError && <Error message="There was an error"></Error>}
    </form>
  );
}
