class Book {
  /**
   * Creates a book
   * @param {string} title - The title of the book
   * @param {string} author - The author of the book
   * @param {string} isbn - The ISBN of the book
   */
  constructor(title, author, isbn) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.isbn = isbn;
    this.author = author;
    this.borrowed = false;
  }

  /**
   * Check if the book is borrowed
   *
   * @returns {boolean} - True if the book is borrowed, false otherwise
   */
  isBorrowed() {
    return this.isBorrowed;
  }
}
module.exports = Book;
