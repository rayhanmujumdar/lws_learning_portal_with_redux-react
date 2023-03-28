import React from "react";
import { useGetVideosQuery } from "../../../feature/videos/videosApi";
import TableError from "../../ui/TableError";
import TableLoading from "../../ui/TableLoading";
import VideoTableRow from "./VideoTableRow";

export default function videoTable({handleEdit}) {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  let content = null;
  if (isLoading) {
    content = <TableLoading></TableLoading>
  }
  if (!isLoading && isError) {
    content = <TableError message="There was an error"></TableError>
  }
  if (!isLoading && !isError && videos.length === 0) {
    content = <TableError message="Content not found"></TableError>
  }
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <VideoTableRow key={video.id} video={video} handleEdit={handleEdit}></VideoTableRow>
    ));
  }
  return (
    <table className="divide-y-1 text-base divide-gray-600 w-full">
      <thead>
        <tr>
          <th className="table-th">Video Title</th>
          <th className="table-th">Description</th>
          <th className="table-th">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-600/50">{content}</tbody>
    </table>
  );
}
