import React from "react";
import EditQuizForm from "../../form/EditQuizForm";

export default function EditQuiz({quizId,control}) {
  return (
    <div>
      <h1 className="text-2xl text-center pb-3">Add New Assignment</h1>
      <EditQuizForm quizId={quizId} control={control}></EditQuizForm>
    </div>
  );
}
