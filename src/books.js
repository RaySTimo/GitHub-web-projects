function findAuthorById(authors, id) {
let found = authors.find((author) => author.id === id);
     return found;
}

function findBookById(books, id) {
let found = books.find((book) => book.id === id);
     return found;
}


function partitionBooksByBorrowedStatus(books) {
let allBooks = [];

let booksCheckedOut = books.filter((book) => book.borrows[0].returned === false);
 allBooks.push(booksCheckedOut);
  
let booksAvailable = books.filter((book) => book.borrows[0].returned === true);
 allBooks.push(booksAvailable);
  
return allBooks;
}


function getBorrowersForBook(book, accounts) {
  let bookBorrowers = book.borrows;
  const result = [];
  bookBorrowers.forEach((obj)=>{ const id = obj.id; 
  const acc=accounts.find((account)=>account.id === id);
  acc.returned=obj.returned;
  if(result.length<10){ 
    result.push(acc); 
  };
  })                              
  return result;
  }
 
            
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
