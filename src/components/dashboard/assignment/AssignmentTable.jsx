import React from "react";
import AssignmentRow from "./AssignmentRow";

export default function AssignmentTable() {
  return (
    <table className="divide-y-1 text-base divide-gray-600 w-full">
      <thead>
        <tr>
          <th className="table-th">Title</th>
          <th className="table-th">Video Title</th>
          <th className="table-th">Mark</th>
          <th className="table-th">Action</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-600/50">
        <AssignmentRow></AssignmentRow>
        <AssignmentRow></AssignmentRow>
        <AssignmentRow></AssignmentRow>
      </tbody>
    </table>
  );
}
