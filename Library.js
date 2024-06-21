class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  /**
   *
   * @param {User} user - The user to register
   */
  registerMember(user) {
    this.members.push(user);
  }

  /**
   *
   * @param {Book} book - The book to add to the library
   */
  addNewBook(book) {
    this.books.push(book);
  }

  /**
   * Borrow a book
   * @param {User} user - The user borrowing the book
   * @param {string} isbn - The ISBN of the book to borrow
   * @returns {boolean} - True if the book was borrowed successfully, otherwise false
   */
  borrowBook(user, isbn) {
    const book = this.books.find((book) => book.isbn === isbn);

    if (user && book) {
      return user.borrowBook(book);
    }
    return false;
  }

  /**
   * Return a book
   * @param {User} user - The user returning the book
   * @param {string} isbn - The ISBN of the book to return
   * */
  returnBook(user, isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      user.borrowedBooks = user.borrowedBooks.filter(
        (borrowedBook) => borrowedBook.isbn !== isbn
      );
      book.borrowed = false;
    }
  }
}

module.exports = Library;
