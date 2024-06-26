const Book = require('./Book');
const User = require('./User');
const Library = require('./Library');

const library = new Library();
const ola = new User('Ola Josh');

library.addNewBook(new Book('The Hobbit', 'J.R.R. Tolkien', '978-0618260300'));
library.addNewBook(
  new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', '978-0618346257')
);

library.registerMember(ola);
library.borrowBook(ola, '978-0618260300');
console.log(library.books);
console.log(library.members);
