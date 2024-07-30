import React from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment, editAssignment } from "./reducer";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

interface AssignmentControlButtonsProps {
  assignmentId: string;
}

const AssignmentControlButtons: React.FC<AssignmentControlButtonsProps> = ({ assignmentId }) => {
  const dispatch = useDispatch();

  return (
    <div className="float-end">
      <FaPencil onClick={() => dispatch(editAssignment(assignmentId))} className="text-primary me-3" />
      <FaTrash onClick={() => dispatch(deleteAssignment(assignmentId))} className="text-danger me-2 mb-1" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

export default AssignmentControlButtons;
