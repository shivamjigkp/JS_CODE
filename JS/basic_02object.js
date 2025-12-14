const jsuser={
    name1:"shivam",
    email:"tradewithmasterffa2gmial.com",
    Game:"masterff",
    art: "trading ",
    obj1:{
        aim:"dubai hedge fund manager ",size:"5000doloor"}
    

};

// to access value by diff method
console.log(jsuser);
console.log(jsuser.email);
console.log(jsuser.obj1.aim);
console.log(jsuser["obj1"]["aim"]);
// for destructure access by small name
 const{art}=jsuser;
console.log(art);
//by shortname
const{art:a}=jsuser;
// destructure object ke under object 
const {obj1 : {aim: myaim}}=jsuser;
console.log(myaim);


// array ke under object and common properties 
const arruser=[ {name1:"shivam1",
    email:"tradewithmasterffa2gmial.com",
    Game:"masterff",
    art: "trading ",
    obj1:{
        aim:"dubai hedge fund manager ",size:"5000doloor"}}];

        // to access values in array 

        console.log(arruser[0].name1)
        // property key value and both 
        console.log(Object.values(arruser));
        console.log(Object.keys(arruser));
        console.log(Object.entries(arruser));


         
