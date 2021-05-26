const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8000;

const books = [
    { "title": "Harry", "author": "J.K. Rowling" },
    { "title": "Jane Eyre", "author": "Charlotte Brontë" },
    { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
    { "title": "A Thousand Splendid Suns", "author": "Khaled Hosseini" }
]

app.get('/books', (req, res) => {
    let bookTitle = req.query.title
    var book = books.filter(b => {
        return b.title === bookTitle
      })

    if (book) res.send(book[0].author);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})