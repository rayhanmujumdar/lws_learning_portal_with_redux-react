import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextInput from "../ui/TextInput";
import { selectAuthUser } from "../../feature/auth/authSelector";
import { useAddAssignmentMarkMutation } from "../../feature/assignmentMark/assignmentMarkSlice";
import Error from "../ui/error/Error";
import validUrl from "../../utils/validUrl";

export default function VideoAssignmentForm({
  control,
  assignment,
  videoTitle
}) {
  const { title, id: assignmentId, totalMark } = assignment || {};
  const { id: userId, name } = useSelector(selectAuthUser);
  const [repoLink, setRepoLink] = useState("");
  const [inputError, setInputError] = useState("");
  const [addAssignment, { isSuccess, isError }] = useAddAssignmentMarkMutation();
  useEffect(() => {
    if (isSuccess && !isError) {
      control(false);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validUrl(repoLink)) {
      setInputError("Provide a valid url");
    } else {
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
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
      <div className="flex justify-center items-center flex-col gap-y-2">
        <h1 className="lg:text-3xl md:text-2xl capitalize text-center">
          {videoTitle}
        </h1>
        <h3 className="md:text-2xl text-center">Assignment Name :- {title}</h3>
        <p className="md:text-lg text-center">Assignment Mark : {totalMark}</p>
      </div>
      <div>
        <TextInput
          value={repoLink}
          onChange={(e) => setRepoLink(e.target.value)}
          placeholder="github repo link"
          required
          title="Github link"
        />
        {inputError && <p className="text-red-400 pt-1">{inputError} !!</p>}
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
      {isError && <Error message="There was an error"></Error>}
    </form>
  );
}
