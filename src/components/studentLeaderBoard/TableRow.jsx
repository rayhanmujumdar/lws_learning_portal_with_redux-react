import React from "react";

export default function TableRow({ result, rank }) {
  const { name, totalQuizMark, totalAssignmentMark, totalMark } = result || {};
  return (
    <tr className="border-b border-slate-600/50">
      <td className="table-td text-center">{rank}</td>
      <td className="table-td text-center">{name}</td>
      <td className="table-td text-center">{totalQuizMark}</td>
      <td className="table-td text-center">{totalAssignmentMark}</td>
      <td className="table-td text-center">{totalMark}</td>
    </tr>
  );
}
