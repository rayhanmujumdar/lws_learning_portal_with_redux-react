import React from "react";
import AddAssignmentForm from "../../form/AddAssignmentFrom";

export default function AddAssignment({ control }) {
  return (
    <div>
      <h1 className="text-2xl text-center pb-3">Add New Assignment</h1>
      <AddAssignmentForm control={control}></AddAssignmentForm>
    </div>
  );
}
