import React from "react";
import MarkTableRow from "./MarkTableRow";
import { useGetAllAssignmentMarkQuery } from "../../../feature/assignmentMark/assignmentMarkApi";
import TableLoading from "../../ui/loader/TableLoading";
import TableError from "../../ui/error/TableError";
import {useDispatch} from "react-redux"
import { updateStatus } from "../../../feature/assignmentMark/assignmentMarkSlice";

export default function MarkTable() {
  const dispatch = useDispatch()
  const {
    data: allAssignmentMark,
    isLoading,
    isError,
  } = useGetAllAssignmentMarkQuery();
  let content = null;
  if (isLoading) {
    content = <TableLoading></TableLoading>;
  }
  if (!isLoading && isError) {
    content = <TableError message="There was an error"></TableError>;
  }
  if (!isLoading && !isError && allAssignmentMark.length === 0) {
    content = <TableError message="No assignment submitted"></TableError>;
  }
  if (!isLoading && !isError && allAssignmentMark.length > 0) {
    dispatch(updateStatus(allAssignmentMark));
    content = allAssignmentMark.map((assignmentMark) => (
      <MarkTableRow
        key={assignmentMark.id}
        assignmentMark={assignmentMark}
      ></MarkTableRow>
    ));
  }
  return (
    <table className="divide-y-1 text-base divide-gray-600 w-full">
      <thead>
        <tr>
          <th className="table-th">Assignment</th>
          <th className="table-th">Date</th>
          <th className="table-th">Student Name</th>
          <th className="table-th">Repo Link</th>
          <th className="table-th">Mark</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-600/50">
        {content}
      </tbody>
    </table>
  );
}
