import React from "react";

export default function TableError({ message }) {
  return (
    <tr className="flex items-center w-full">
      <td className="relative bg-red-200 max-w-xl px-4 py-2 text-red-800 rounded shadow w-full">
        <span className="block text-sm">{message}</span>
      </td>
    </tr>
  );
}
