import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Note(props) {
  // console.log(props);
  const deleteNote = () => {
    props.delete(props.id);
  };

  return (
    <>
      <div className=" mx-4 note rounded-4 px-3 pt-3 mb-5">
        <h5 className="mb-3 fs-5">{props.title}</h5>
        <p className=" note-content mb-2">{props.content}</p>
        <div className="container remove text-end px-3 pb-3">
          <Tooltip title="Remove Note" placement="left-end">
            <IconButton className="deleteIcon" size="small" onClick={deleteNote}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
