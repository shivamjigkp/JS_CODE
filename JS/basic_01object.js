const mmmuser={
    name2: "shivam ji" ,
    rollno:2023041167,
    address:"kanpur",
    hobby:["chess","stockanalyst","hockey","programmer"],
// for symbol as akey 
   // not working 
   //  [mysym]:"first"

   //email not working 

}
console.log(mmmuser);

// for acess of object 
console.log(mmmuser["name2"]);


// for freeze of object for no change 
// Object.freeze(mmmuser);

// for change value 
mmmuser.name2="masterdff";
console.log(mmmuser["name2"]);

//  taking refrence by $this 
console.log(`hello mmmuser,${this.name2}`);
// greeting 
mmmuser.greeting=function(){
    console.log("hello mmmuser how are u")
}

console.log(mmmuser.greeting());






