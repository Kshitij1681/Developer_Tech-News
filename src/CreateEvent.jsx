import React from "react";
import Tooltip from "@mui/material/Tooltip";

const CreateEvent = ({ id, event, date, time, remove, edit }) => {
  return (
    <>
      <div className="col-10 eachItem input-group bg-light px-0 rounded-1 mb-3">
        <Tooltip title={`Created on:  ${date}, ${time}`} placement="left-end">
          <span className="input-group-text">
            <i className="bi bi-sticky-fill"></i>
          </span>
        </Tooltip>
        <h5 className="mb-0 item py-2 ps-3">{event}</h5>
        <div className="ms-auto d-flex">
          <Tooltip title="Edit Event" placement="left-start">
            <span
              className="input-group-text ms-auto edit"
              onClick={() => {
                edit(id);
              }}
            >
              <i className="bi bi-pen-fill"></i>
            </span>
          </Tooltip>

          <Tooltip title="Delete Event" placement="right-end">
            <span
              className="input-group-text delete"
              onClick={() => {
                remove(id);
              }}
            >
              <i className="bi bi-trash3"></i>
            </span>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
