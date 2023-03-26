import React from "react";
import CourseLayout from "../../components/studentCourseVideos/CourseLayout";
import Description from "../../components/studentCourseVideos/Description";
import VideoList from "../../components/studentCourseVideos/VideoList";

export default function CoursePlayer() {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <CourseLayout>
          <Description></Description>
          <VideoList></VideoList>
        </CourseLayout>
      </div>
    </section>
  );
}
