import React from "react";
import QuizzesRow from "./QuizzesRow";
import { useGetQuizzesQuery } from "../../../feature/quizzes/quizApi";
import TableLoading from "../../ui/loader/TableLoading";
import TableError from "../../ui/error/TableError";

export default function QuizzesTable({ deleteHandler, editHandler }) {
  const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();
  let content = null;
  if (isLoading) {
    content = <TableLoading></TableLoading>;
  }
  if (!isLoading && isError) {
    content = <TableError message="There was an error"></TableError>;
  }
  if (!isLoading && !isError && quizzes?.length === 0) {
    content = <TableLoading message="Add new quizzes"></TableLoading>;
  }
  if (!isLoading && !isError && quizzes?.length > 0) {
    content = quizzes.map((quiz, index) => (
      <QuizzesRow
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        key={quiz.id}
        listNo={index + 1}
        quiz={quiz}
      ></QuizzesRow>
    ));
  }
  return (
    <table className="divide-y-1 text-base divide-gray-600 w-full">
      <thead>
        <tr>
          <th className="table-th">Question</th>
          <th className="table-th">Video</th>
          <th className="table-th justify-center">Action</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-600/50">{content}</tbody>
    </table>
  );
}
