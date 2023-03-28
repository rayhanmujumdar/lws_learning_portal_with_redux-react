import React from "react";
import { Link } from "react-router-dom";
import { useGetVideoQuery } from "../../feature/videos/videosApi";
import { useParams } from "react-router-dom";
import Loading from "../ui/loader/Loading";
import Error from "../ui/error/Error";
import { format } from "date-fns";

export default function Description() {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);
  const { title, description, url, createdAt } = video || {};
  let content = null;
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (!isLoading && isError) {
    return <Error message={"There was an error"}></Error>;
  }
  if (!isLoading && !isError && video?.id) {
    const date = createdAt?.split("T")[0];
    const dateFormat = format(new Date(date), "d MMMM yyyy");
    content = (
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <iframe
          width="100%"
          className="aspect-video"
          src={url}
          title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-100">
            {title}
          </h1>
          <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
            Uploaded on {dateFormat}
          </h2>
          <div className="flex gap-4">
            <Link
              to="/student/assignment"
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              এসাইনমেন্ট
            </Link>

            <Link
              to="/student/Quiz"
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              কুইজে অংশগ্রহণ করুন
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
        </div>
      </div>
    );
  }
  return content;
}
