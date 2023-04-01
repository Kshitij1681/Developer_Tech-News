import React, { useState } from "react";
import Logo from "./images/todo_logo.svg";
import Tooltip from "@mui/material/Tooltip";
import CreateEvent from "./CreateEvent";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(true);
  const [isEditItem, setisEditItem] = useState(null);

  const addItem = () => {
    if (inputData === "") {
      alert("Please fill the input field!");
    } else if (inputData !== "" && !edit) {
      setItems((prevData) => {
        return prevData.map((val) => {
          if (val.id === isEditItem) {
            return { ...val, event: inputData };
          }
          return val;
        });
      });
      setInputData("");
      setEdit(true);
      setisEditItem(null);
    } else if (inputData !== "") {
      const unique = new Date().getTime().toString();
      const event_date = new Date().toDateString();
      const event_time = new Date().toLocaleTimeString();
      setItems((prevData) => {
        return [{ id: unique, event: inputData, date: event_date, time: event_time }, ...prevData];
      });
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    setItems((prevData) => {
      return prevData.filter((val) => {
        return id !== val.id;
      });
    });
  };

  const editItem = (id) => {
    let newEditItem = items.find((val) => {
      return val.id === id;
    });

    // console.log(neweditItem);
    setEdit(false);
    setInputData(newEditItem.event);
    setisEditItem(id);
  };

  const reset = () => {
    setItems([]);
  };

  return (
    <>
      <div className="container-fluid" style={{ minHeight: "100vh", backgroundColor: "#040723" }}>
        <div className="container w-50 mx-auto pt-5">
          <figure className="text-center">
            <img src={Logo} alt="todo_app" className="img-fluid mb-3" />
            <figcaption className="lead text-light">Add your List Here ✌️</figcaption>
          </figure>
          <div className="row addItems justify-content-center mb-5">
            <div className="col-10 input-group px-0 bg-light rounded-1">
              <span className="input-group-text">
                <i className="bi bi-card-checklist"></i>
              </span>
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Create your event here..."
                value={inputData}
                onChange={(e) => {
                  setInputData(e.target.value);
                }}
              />
              {!edit ? (
                <Tooltip title="Update Event" placement="right-end">
                  <span className="input-group-text update" onClick={addItem}>
                    <i className="bi bi-pencil-square"></i>
                  </span>
                </Tooltip>
              ) : (
                <Tooltip title="Add Event" placement="right-end">
                  <span className="input-group-text add" onClick={addItem}>
                    <i className="bi bi-file-earmark-plus"></i>
                  </span>
                </Tooltip>
              )}
            </div>
          </div>
          <div className="row showItems justify-content-center">
            {items.map((val, index) => {
              return <CreateEvent key={val.id} id={val.id} event={val.event} date={val.date} time={val.time} remove={deleteItem} edit={editItem} />;
            })}

            <div className="col-10 text-center mt-4">
              <button className="btn btn-secondary removeAll px-3 py-2" onClick={reset}>
                CHECK LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
