import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Tooltip from "@mui/material/Tooltip";

export default function CreateNote(props) {
  let [note, setNote] = useState({ title: "", content: "" });
  let [expand, setExpand] = useState(false);

  const inputEvent = (event) => {
    let { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const addEvent = () => {
    note.title === "" || note.content === "" ? alert("Please fill all input fields to create a note") : props.getNote({ ...note });

    if (note.title !== "" && note.content !== "") {
      note.title = "";
      note.content = "";
    }
  };

  const resizeHeight = () => {
    setExpand(!expand);
  };

  return (
    <>
      <div className="container py-1 mt-4 main_note mb-5">
        <Tooltip title={!expand ? "Double Click to expand / shrink" : ""} placement="bottom-start">
          <form onDoubleClick={resizeHeight}>
            <input
              type="text"
              className="form-control py-1"
              name="title"
              value={note.title}
              id="titleInput"
              placeholder="Title"
              autoComplete="off"
              onChange={inputEvent}
            />
            {expand ? (
              <div className="form-floating py-3">
                <textarea
                  className="form-control"
                  name="content"
                  value={note.content}
                  placeholder="Write a note here..."
                  id="floatingTextarea"
                  onChange={inputEvent}
                ></textarea>
                <label htmlFor="floatingTextarea">Write a note here...</label>
              </div>
            ) : null}

            {expand ? (
              <div className="container pb-3 text-end">
                <Tooltip title="Add Note" placement="left-end">
                  <IconButton className="iconbutton" onClick={addEvent}>
                    <AddRoundedIcon />
                  </IconButton>
                </Tooltip>
              </div>
            ) : null}
          </form>
        </Tooltip>
      </div>
    </>
  );
}
