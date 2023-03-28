import React from "react";
import CourseLayout from "../../components/studentCourseVideos/CourseLayout";
// import Description from "../../components/studentCourseVideos/Description";
import VideoList from "../../components/studentCourseVideos/VideoList";
import { Outlet } from "react-router-dom";
import Description from "../../components/studentCourseVideos/Description";

export default function CoursePlayer() {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <CourseLayout>
          <Outlet></Outlet>
          <VideoList></VideoList>
        </CourseLayout>
      </div>
    </section>
  );
}
