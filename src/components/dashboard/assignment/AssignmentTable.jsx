import React from "react";
import AssignmentRow from "./AssignmentRow";
import { useGetAssignmentsQuery } from "../../../feature/assignments/assignmentsApi";
import TableLoading from "../../ui/loader/TableLoading";
import TableError from "../../ui/error/TableError";

export default function AssignmentTable({openDeleteModal,openEditModal}) {
  const { data: assignments, isLoading, isError } = useGetAssignmentsQuery();
  let content = null;
  if (isLoading) {
    content = <TableLoading></TableLoading>;
  }
  if (!isLoading && isError) {
    content = <TableError message="There was an error"></TableError>;
  }
  if (!isLoading && !isError && assignments.length === 0) {
    content = <TableError message="assignment not found"></TableError>;
  }
  if (!isLoading && !isError && assignments.length > 0) {
    console.log(assignments)
    content = assignments.map((assignment) => (
      <AssignmentRow
        openDeleteModal={openDeleteModal}
        openEditModal={openEditModal}
        key={assignment.id}
        assignment={assignment}
      ></AssignmentRow>
    ));
  }
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
      <tbody className="divide-y divide-slate-600/50">{content}</tbody>
    </table>
  );
}
