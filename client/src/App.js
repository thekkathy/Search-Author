import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <main>
        <div className="contianer p-4 m-4">
          <div className="row display-4 m-4 justify-content-center">Author Search</div>
          <div className="row m-4 justify-content-center">Type a book title and find out who wrote this book</div>
          <div className="row m-4 justify-content-center">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search book title"
                aria-label="Search"
                onChange={(e) => {
                  e.preventDefault();
                  setTitle(e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
                </button>
            </form>
            {title}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
