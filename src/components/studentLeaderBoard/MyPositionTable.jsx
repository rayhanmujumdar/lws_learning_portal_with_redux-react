import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectMyRank } from "../../feature/leaderboard/leaderboardSelector";
import TableHead from "./TableHead";

export default function myPositionTable() {
  const { rankNo, name, totalQuizMark, totalAssignmentMark, totalMark } =
    useSelector(selectMyRank,shallowEqual);
  return (
    <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
      <TableHead></TableHead>
      <tbody>
        <tr className="border-2 border-cyan">
          <td className="table-td text-center font-bold">{rankNo}</td>
          <td className="table-td text-center font-bold">{name}</td>
          <td className="table-td text-center font-bold">{totalQuizMark}</td>
          <td className="table-td text-center font-bold">
            {totalAssignmentMark}
          </td>
          <td className="table-td text-center font-bold">{totalMark}</td>
        </tr>
      </tbody>
    </table>
  );
}
