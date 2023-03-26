import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function resultTable() {
  return (
    <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
      <TableHead></TableHead>
      <tbody>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
      </tbody>
    </table>
  );
}
