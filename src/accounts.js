function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
     return found;
  
}

function sortAccountsByLastName(accounts) {
 let sorted = accounts.sort((accountA, accountB) =>
 accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1) 
 return sorted;
} 

function getTotalNumberOfBorrows(account, books) { 
  const { id: accountId } = account; 
  return books.reduce((accumulator, book) => { 
    return ( accumulator + book.borrows .filter(borrow => borrow.id === accountId) .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0) ); }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const accountId = account.id;
  let filteredBook= books.filter((book) => { 
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned); });
  const answer = filteredBook.map((book)=>{ 
    const author = authors.find((author)=>author.id===book.authorId) 
    const newBook = { ...book, author } 
    return newBook; })
   return answer;
 }
  


 
 module.exports = {
  findAccountById,
 sortAccountsByLastName,
  getTotalNumberOfBorrows,
getBooksPossessedByAccount};
