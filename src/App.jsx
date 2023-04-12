import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";

const App = () => {
  return (
    <>
      <div>
        <h1>Tech News On The Go</h1>
        <Search />
        <Pagination />
        <Stories />
      </div>
    </>
  );
};

export default App;
