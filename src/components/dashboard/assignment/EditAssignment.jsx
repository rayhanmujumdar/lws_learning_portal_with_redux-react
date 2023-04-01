import React from "react";
import EditAssignmentFrom from "../../form/EditAssignmentForm";

export default function EditAssignment({ control, assignmentId }) {
  return (
    <div>
      <h1 className="text-4xl text-center pb-3">Edit Assignment</h1>
      <EditAssignmentFrom
        control={control}
        assignmentId={assignmentId}
      ></EditAssignmentFrom>
    </div>
  );
}
