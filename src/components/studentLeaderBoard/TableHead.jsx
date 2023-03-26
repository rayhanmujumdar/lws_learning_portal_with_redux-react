import React from "react";

export default function tableHead() {
  return (
    <thead>
      <tr>
        <th className="table-th !text-center">Rank</th>
        <th className="table-th !text-center">Name</th>
        <th className="table-th !text-center">Quiz Mark</th>
        <th className="table-th !text-center">Assignment Mark</th>
        <th className="table-th !text-center">Total</th>
      </tr>
    </thead>
  );
}
