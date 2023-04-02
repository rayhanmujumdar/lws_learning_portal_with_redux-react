import React, { useState } from "react";
import QuizzesTable from "../../components/dashboard/quizzes/QuizzesTable";
import QuizDeleteConfirm from "../../components/dashboard/quizzes/quizDeleteConfirm";
import Modal from "../../components/Modal/Modal";

export default function Quizzes() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [EditModalOpen, setEditModalOpen] = useState(false);
  const [delModalOpen, setDelModalOpen] = useState(false);
  const [quizId, setQuizId] = useState(null);
  const handleEdit = (id) => {
    setEditModalOpen(true);
    setQuizId(id);
  };
  const handleDelete = (id) => {
    setDelModalOpen(true);
    setQuizId(id);
  };
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <button className="btn ml-auto">Add Quiz</button>
          </div>
          <Modal open={delModalOpen}>
            <QuizDeleteConfirm
              quizId={quizId}
              control={setDelModalOpen}
            ></QuizDeleteConfirm>
          </Modal>
          <div className="overflow-x-auto mt-4">
            <QuizzesTable
              deleteHandler={handleDelete}
              editHandler={handleEdit}
            ></QuizzesTable>
          </div>
        </div>
      </div>
    </section>
  );
}
