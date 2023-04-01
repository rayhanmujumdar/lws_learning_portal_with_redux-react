import React, { useState } from "react";
import AssignmentTable from "../../components/dashboard/assignment/AssignmentTable";
import Modal from "../../components/Modal/Modal";
import AddAssignment from "../../components/dashboard/assignment/AddAssignment";
import AssignmentDeleteConfirm from "../../components/dashboard/assignment/AssignmentDeleteConfirm";
import EditAssignment from "../../components/dashboard/assignment/EditAssignment";

export default function Assignment() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [assignmentId, setAssignmentId] = useState(null);
  const handleDeleteModal = (id) => {
    setOpenDeleteModal(true);
    setAssignmentId(id);
  };
  const handleEditModal = (id) => {
    setOpenEditModal(true);
    setAssignmentId(id);
  };
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <button
              onClick={() => setOpenAddModal(true)}
              className="btn ml-auto"
            >
              Add Assignment
            </button>
          </div>
          <Modal open={openAddModal}>
            <AddAssignment control={setOpenAddModal}></AddAssignment>
          </Modal>
          <Modal open={openEditModal}>
            <EditAssignment
              control={setOpenEditModal}
              assignmentId={assignmentId}
            ></EditAssignment>
          </Modal>
          <Modal open={openDeleteModal}>
            <AssignmentDeleteConfirm
              control={setOpenDeleteModal}
              assignmentId={assignmentId}
            ></AssignmentDeleteConfirm>
          </Modal>
          <div className="overflow-x-auto mt-4">
            <AssignmentTable
              openDeleteModal={handleDeleteModal}
              openEditModal={handleEditModal}
            ></AssignmentTable>
          </div>
        </div>
      </div>
    </section>
  );
}
