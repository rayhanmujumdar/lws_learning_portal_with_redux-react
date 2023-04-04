import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { useUpdateAssignmentMarkMutation } from "../../../feature/assignmentMark/assignmentMarkApi";

export default function MarkTableRow({ assignmentMark }) {
  const [updateAssignmentMark] = useUpdateAssignmentMarkMutation();
  const {
    id,
    student_name,
    title,
    createdAt,
    totalMark,
    mark,
    repo_link,
    status,
  } = assignmentMark;
  const [inputMark, setInputMark] = useState(totalMark);
  const date = format(new Date(createdAt), "hh MMM yyyy");
  const time = format(new Date(createdAt), "pp");
  const handleMarkSubmit = () => {
    if (typeof Number(inputMark) === "number") {
      updateAssignmentMark({
        id,
        data: {
          ...assignmentMark,
          mark: Number(inputMark),
          status: "published",
        },
      });
    }
  };
  return (
    <tr>
      <td className="table-td">{title}</td>
      <td className="table-td">
        {date} {time}
      </td>
      <td className="table-td">{student_name}</td>
      <td className="table-td">{repo_link}</td>
      {status === "pending" ? (
        <td className="table-td input-mark">
          <input
            required
            type="number"
            onChange={(e) => setInputMark(e.target.value)}
            max={totalMark}
            value={inputMark}
          />
          <svg
            onClick={handleMarkSubmit}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </td>
      ) : (
        <td className="table-td">{mark}</td>
      )}
    </tr>
  );
}
