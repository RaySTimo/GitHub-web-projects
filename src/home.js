function getTotalBooksCount(books) {
  let numberOfBooks = books.forEach((book) => book.title)
  return books.length;
}


function getTotalAccountsCount(accounts) {
  numberOfAccounts = Object.keys(accounts);
  return (numberOfAccounts.length);
}



function getBooksBorrowedCount(books) {
  let result = 0;
 let bookBorrows = books.forEach((book)=> {
   book.borrows.forEach((item)=>{ 
   if (item.returned === false){
     result++;}
   });
   });
  return result;
 } 
  
 
function getMostCommonGenres(books) { 
  let result = {};
  //let count = 0;
  books.forEach((book)=>{
    if (result[book.genre]){
      result[book.genre]++;
  }
    else{
      result[book.genre] = 1;}
    });   
  result = Object.entries(result).map(([name, count]) => 
 { return { name, count } 
    //result.push(Object.entries) 
 });
 // let mostGenres= result.sort(Object.entries); 

      return result.sort((a, b) => b.count - a.count).slice(0, 5);
  //return ;
 }                                

  
function getMostPopularBooks(books) {
  let result = [];
  let allBookBorrows = books.forEach((book) => result.push({ name: book.title, count: book.borrows.length}));
return result.sort((a,b) => b.count - a.count).slice(0, 5);
} 


function  getMostPopularAuthors(books, authors) {
  
    let result = [];
  authors.forEach((author) => {
    let authorList = {
       name: `${author.name.first} ${author.name.last}`,
       count: 0
    };
    books.forEach((book) => {
     if (book.authorId === author.id) {
       authorList.count += book.borrows.length;
     }
    });
    result.push(authorList);
  });
  result = result.sort((authorA, authorB) => authorB.count - authorA.count);
  return result.slice(0, 5);

  /*let result = [];
 
 let popularAuthor = authors.filter((author)=>{
   let mostPopularBooks= books.forEach((book)=>{                                  
 if (author.id === book.authorId)
   result.push({ name: author.name, count: book.borrows.length}));
 
 console.log( authorName, count)*/
} 


module.exports = {
 getTotalBooksCount,
 getTotalAccountsCount,
 getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
 
};

