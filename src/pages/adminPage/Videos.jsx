import React, { useState } from "react";
import VideoTable from "../../components/dashboard/videos/VideoTable";
import AddVideoForm from "../../components/form/AddVideoForm";
import EditVideoForm from "../../components/form/EditVideoForm";
import Modal from "../../components/Modal/Modal";
export default function Videos() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [videoId,setVideoId] = useState(undefined)
  const handleEdit = (id) => {
    setEditModalOpen(true)
    setVideoId(id)
  }
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <button
              onClick={() => setAddModalOpen(true)}
              className="btn ml-auto"
            >
              Add Video
            </button>
            <Modal open={addModalOpen} control={setAddModalOpen}>
              <AddVideoForm control={setAddModalOpen}></AddVideoForm>
            </Modal>
            <Modal open={editModalOpen} control={setEditModalOpen}>
              <EditVideoForm
                videoId={videoId}
                control={setEditModalOpen}
              ></EditVideoForm>
            </Modal>
          </div>
          <div className="overflow-x-auto mt-4">
            <VideoTable handleEdit={handleEdit}></VideoTable>
          </div>
        </div>
      </div>
    </section>
  );
}
