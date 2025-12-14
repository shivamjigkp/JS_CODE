// this file contain array advanced topic 

// three dimensional array 
const book=["c++","dsa","js","finace"];
console.log(book);
const impbook=[["stock","chess"],"pscology"];
console.log(impbook[0][1]);
// for depth of function 
const realarr=impbook.flat(Infinity);
console.log(realarr);

//concat function also ... spread fuction
const allbook=book.concat(impbook);
console.log(allbook);
const newallbook=[...book,...impbook];
console.log(newallbook);

// jara magic .from .of  
// const name1="hitesh";
 //console.log(name1.from("hitesh"));


 //slice //splice 
 console.log(book);
const section =book.slice(1,3);
console.log(section);
console.log(book);

const section1 =book.splice(1,3);
console.log(section1);
console.log(book);