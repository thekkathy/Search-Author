const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();
app.use(cors());
const port = 8000;

// const books = [
//     { "title": "Harry Potter", "author": "J.K. Rowling" },
//     { "title": "Jane Eyre", "author": "Charlotte Brontë" },
//     { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
//     { "title": "A Thousand Splendid Suns", "author": "Khaled Hosseini" }
// ]

app.get('/books', (req, res) => {
    let bookTitle = req.query.title
    const url = new URL("https://www.googleapis.com/books/v1/volumes");
    url.searchParams.append("key", process.env.google_books_api_key);
    url.searchParams.append("q", bookTitle + "+intitle");
    url.searchParams.append("printType", "books");

    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((obj) => {
            let books = obj.items;
            var book = books.filter(b => {
                return b.volumeInfo.title === bookTitle
            })
            if (book) {
                res.send(book);
            }
        })
    // var book = books.filter(b => {
    //     return b.title === bookTitle
    //   })

    // if (book){
    //     res.send(book);
    // }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})