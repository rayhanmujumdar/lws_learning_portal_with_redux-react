import React, { useEffect, useState } from "react";
import {
  useEditVideoMutation,
  useGetVideoQuery,
} from "../../feature/videos/videosApi";
import Error from "../ui/Error";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function EditVideoForm({ videoId, control }) {
  const { data: video,isSuccess: videoSuccess } = useGetVideoQuery(videoId,);
  const {
    id,
    title: videoTitle,
    url: videoUrl,
    description: videoDescription,
    duration: videoDuration,
    views: videoViews,
  } = video || {};
  const [EditVideo, { isLoading, isSuccess, isError }] = useEditVideoMutation();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState("");
  useEffect(() => {
    if (video?.id) {
      setTitle(videoTitle);
      setUrl(videoUrl)
      setDescription(videoDescription)
      setDuration(videoDuration)
      setViews(videoViews)
    }
  }, [videoId,videoSuccess]);
  useEffect(() => {
    if(isSuccess){
      control(false)
    }
  },[isSuccess])
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    EditVideo({id,data: {
      title,
      url,
      description,
      duration,
      views,
      createdAt: date.toISOString(),
    }});
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl text-center">Edit Video</h1>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                title="Video Title"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                title="YouTube Video link"
              />
            </div>

            <div className="col-span-6">
              <TextArea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                title="Description"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
              <TextInput
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                title="Video Duration"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
              <TextInput
                onChange={(e) => setViews(e.target.value)}
                value={views}
                title="Video no of views"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-[#080E1B] text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {isError && <Error message="There was an error" />}
      </div>
    </form>
  );
}
