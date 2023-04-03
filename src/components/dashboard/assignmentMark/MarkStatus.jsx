import React from "react";
import { useSelector } from "react-redux";

export default function MarkStatus() {
  const { total, pending, markSent } = useSelector(
    (state) => state.assignmentMarkStatus
  );
  return (
    <ul className="assignment-status">
      <li>
        Total <span>{total}</span>
      </li>
      <li>
        Pending <span>{pending}</span>
      </li>
      <li>
        Mark Sent <span>{markSent}</span>
      </li>
    </ul>
  );
}
