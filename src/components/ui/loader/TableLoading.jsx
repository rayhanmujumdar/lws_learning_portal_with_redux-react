import React from "react";

export default function TableLoading() {
  return (
    <tr className="flex items-center">
      <td className="relative bg-green-200 max-w-xl px-4 py-2 text-green-800 rounded shadow w-full">
        <span className="block text-sm">Loading...</span>
      </td>
    </tr>
  );
}
