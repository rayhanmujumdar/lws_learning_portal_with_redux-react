import React from "react";
import AddQuizForm from "../../form/AddQuizForm";

export default function AddQuiz({ control }) {
  return (
    <div>
      <h1 className="text-2xl text-center pb-3">Add New Assignment</h1>
      <AddQuizForm control={control}></AddQuizForm>
    </div>
  );
}
