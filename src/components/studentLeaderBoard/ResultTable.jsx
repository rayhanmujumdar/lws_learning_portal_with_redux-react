import React, { useEffect, useState } from "react";
import { usersSlice } from "../../feature/users/usersAPiSlice";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { selectLeaderBoard } from "../../feature/leaderboard/leaderboardSelector";

export default function resultTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersSlice.endpoints.getUsers.initiate());
  }, [dispatch]);
  const leaderBoard = useSelector(selectLeaderBoard);
  return (
    <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
      <TableHead></TableHead>
      <tbody>
        {leaderBoard
          .slice()
          .sort((a, b) => {
            return b.totalMark - a.totalMark;
          })
          .map((result, rank) => (
            <TableRow
              key={result.id}
              rank={rank + 1}
              result={result}
            ></TableRow>
          ))}
      </tbody>
    </table>
  );
}
