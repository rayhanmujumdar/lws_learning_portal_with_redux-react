import React from "react";
import AddAssignmentFrom from "../../form/AddAssignmentFrom";

export default function AddAssignment({ control }) {
  return (
    <div>
      <h1 className="text-2xl text-center pb-3">Add New Assignment</h1>
      <AddAssignmentFrom control={control}></AddAssignmentFrom>
    </div>
  );
}
