import React from "react";

import MyPositionTable from "../../components/studentLeaderBoard/MyPositionTable"
import ResultTable from "../../components/studentLeaderBoard/ResultTable"
export default function LeaderBoard() {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div>
          <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
          <MyPositionTable></MyPositionTable>
        </div>

        <div className="my-8">
          <h3 className="text-lg font-bold">Top 20 Result</h3>
          <ResultTable></ResultTable>
        </div>
      </div>
    </section>
  );
}
