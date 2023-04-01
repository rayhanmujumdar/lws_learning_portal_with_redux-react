import React, { useEffect, useState } from "react";
import TextInput from "../ui/TextInput";
import NumberInput from "../ui/numberInput";
import {
  useEditAssignmentMutation,
  useGetAssignmentWithIdQuery,
} from "../../feature/assignments/assignmentsApi";

export default function EditAssignmentFrom({ control, assignmentId }) {
  const [title, setTitle] = useState("");
  const [totalMark, setTotalMark] = useState("");
  const { data: assignment, isSuccess: assignmentSuccess } =
    useGetAssignmentWithIdQuery(assignmentId);
  const [editAssignment, { isSuccess }] = useEditAssignmentMutation();
  useEffect(() => {
    if (assignment?.id) {
      setTitle(assignment.title);
      setTotalMark(assignment.totalMark);
    }
  }, [assignmentId, assignmentSuccess]);
  useEffect(() => {
    if (isSuccess) {
      control(false);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    editAssignment({
      id: assignmentId,
      data: {
        ...assignment,
        title,
        totalMark: Number(totalMark),
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                title="Assignment Title"
                placeholder="Title"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
              <NumberInput
                onChange={(e) => setTotalMark(e.target.value)}
                title="Assignment mark"
                placeholder="Mark"
                value={totalMark}
                min={0}
                max={200}
                required
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex justify-between bg-[#080E1B] text-right sm:px-6">
          <button
            onClick={() => control(false)}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            // disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-green-500"
          >
            Save
          </button>
        </div>
      </div>
      {/* {isError && <Error message="There was an error"></Error>} */}
    </form>
  );
}
