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
   * Borrow a book
   * @param {Book} book - The book to borrow
   */
  borrowBook(book) {
    // Return false if the book has been borrowed or the user has borrowed 3 books
    if (book.isBorrowed() || this.borrowedBooks.length >= 3) {
      return false;
    }
    this.borrowedBooks.push(book);
    book.borrowed = true;
    return true;
  }
}

module.exports = User;
