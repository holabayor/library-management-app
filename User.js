const Book = require('./Book');

class User {
  /**
   * Creates a user
   * @param {string} name - The name of the user
   */
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.borrowedBooks = [];
  }

  /**
   * Peek a book
   *
   * @param {isbn} string - ISBN of the book to peek
   *
   * @returns {Book} The details of the book
   */
  peekBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    return book;
  }

  /**
   * Borrow a book
   *
   * @param {string} isbn - The book to return
   */
  returnBook(isbn) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.isbn !== isbn
    );
  }
}

module.exports = User;
