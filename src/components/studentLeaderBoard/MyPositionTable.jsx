import React from "react";
import TableHead from "./TableHead";

export default function myPositionTable() {
  return (
    <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
      <TableHead></TableHead>
      <tbody>
        <tr className="border-2 border-cyan">
          <td className="table-td text-center font-bold">4</td>
          <td className="table-td text-center font-bold">Saad Hasan</td>
          <td className="table-td text-center font-bold">50</td>
          <td className="table-td text-center font-bold">50</td>
          <td className="table-td text-center font-bold">100</td>
        </tr>
      </tbody>
    </table>
  );
}
