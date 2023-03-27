import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Note from "./Note";

export default function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("Note created");
    // console.log(note);
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    // console.log(...addItem);
  };

  const deleteItem = (del_id) => {
    // console.log("Item deleted", del_id);

    setAddItem((prevData) => {
      return prevData.filter((val, index) => {
        return index !== del_id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote getNote={addNote} />
      <div className="container-fluid flex-wrap d-flex">
        {addItem.map((val, index) => {
          return <Note key={index} id={index} {...val} delete={deleteItem} />;
        })}
        ;
      </div>
      <Footer />
    </>
  );
}
