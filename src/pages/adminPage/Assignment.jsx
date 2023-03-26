import React from "react";
import AssignmentTable from "../../components/dashboard/assignment/AssignmentTable";

export default function Assignment() {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <button className="btn ml-auto">Add Assignment</button>
          </div>
          <div className="overflow-x-auto mt-4">
            <AssignmentTable></AssignmentTable>
          </div>
        </div>
      </div>
    </section>
  );
}
