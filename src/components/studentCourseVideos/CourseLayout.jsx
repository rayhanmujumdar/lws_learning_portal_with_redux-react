import React from "react";

export default function CourseLayout({children}) {
  return <div className="grid grid-cols-3 gap-2 lg:gap-8">
    {children}
  </div>;
}
