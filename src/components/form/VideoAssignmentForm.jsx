import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../ui/TextInput";
import { selectAuthUser } from "../../feature/auth/authSelector";
import { useAddAssignmentMutation } from "../../feature/assignmentMark/assignmentMarkSlice";
import { assignmentApi } from "../../feature/assignments/assignmentsApi";

export default function VideoAssignmentForm({
  control,
  assignment,
  videoTitle,
}) {
  const dispatch = useDispatch();
  const { title, id: assignmentId, totalMark } = assignment || {};
  const { id: userId, name } = useSelector(selectAuthUser);
  const [repoLink, setRepoLink] = useState("");
  const [addAssignment, { isSuccess }] = useAddAssignmentMutation();
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        assignmentApi.endpoints.addSubmitted.initiate({
          id: assignmentId,
          data: {
            ...assignment,
            isSubmit: true,
          },
        })
      );
      control(false);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignment({
      student_id: userId,
      student_name: name,
      assignment_id: assignmentId,
      title,
      createdAt: new Date().toISOString(),
      totalMark,
      mark: 0,
      repo_link: repoLink,
      status: "pending",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
      <div className="flex justify-center items-center flex-col gap-y-2">
        <h1 className="lg:text-3xl md:text-2xl capitalize text-center">
          {videoTitle}
        </h1>
        <h3 className="md:text-2xl text-center">{title}</h3>
      </div>
      <div>
        <TextInput
          value={repoLink}
          onChange={(e) => setRepoLink(e.target.value)}
          placeholder="github repo link"
          required
          title="Github link"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => control(false)}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-red-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-green-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
