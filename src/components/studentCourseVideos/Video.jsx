import React from "react";

export default function Video() {
  return (
    <div className="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
      {/* <!-- Thumbnail --> */}
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>
      {/* <!-- Description --> */}
      <div clas="flex flex-col w-full">
        <a href="#">
          <p className="text-slate-50 text-sm font-medium">
            Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS
            SoftExpo 2023
          </p>
        </a>
        <div>
          <span className="text-gray-400 text-xs mt-1">34.5 Mins</span>
          <span className="text-gray-400 text-xs mt-1"> | </span>
          <span className="text-gray-400 text-xs mt-1">241K views</span>
        </div>
      </div>
    </div>
  );
}
