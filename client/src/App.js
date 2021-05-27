import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("your book");
  const [author, setAuthor] = useState(null);

  const apiFetch = async () => {
    try {
      await fetch(`http://localhost:8000/books?title=${title}`)
        .then(
          resp => { return resp.json() }
        )
        .then((obj) => {
          if (obj.length === 0) {
            setAuthor("Book not in database");
          }
          else {
            setAuthor(obj[0].author);

          }
        })
    } catch (error) {
      console.log(error);
    }
  }


  const apiFetchOnEnter = async (e) => {
    if (e.key === 'Enter') {
      try {
        await fetch(`http://localhost:8000/books?title=${title}`)
          .then(
            resp => { return resp.json() }
          )
          .then((obj) => {
            if (obj.length === 0) {
              setAuthor("Book not in database");
            }
            else {
              setAuthor(obj[0].author);

            }
          })
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="App">
      <main>
        <div className="contianer p-4 m-4">
          <div className="row display-4 m-4 justify-content-center">Author Search</div>
          <div className="row m-4 justify-content-center">Type a book title and find out who wrote this book</div>
          <div className="row m-4 justify-content-center">
            <div className="card w-100 px-5 py-3">
              <div className="row">
                <input
                  className="form-control mx-auto my-2"
                  type="search"
                  placeholder="Search book title"
                  aria-label="Search"
                  onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                  onKeyPress={apiFetchOnEnter}
                />
              </div>
              <div className="row">
                <button
                  className="btn btn-outline-success mx-auto my-2"
                  type="submit"
                  onClick={apiFetch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="row m-4 justify-content-center">
            <div className="container">
              <p className="h3 font-weight-light">The author of {title} is: </p>
              <p className="h3 font-weight-normal">{author !== "undefined" && author}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
