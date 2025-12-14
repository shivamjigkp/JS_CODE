// scope global and local within box but var create problem so avoit it 
const a=10;
console.log("outer is global ,",a);
if(true){
    let a=10;
    console.log("inner is box ",a);
}


// lets discuss var problem,the output is last whether it is global or local
var b=10;
console.log("outer is global ,",b);
if(true){
     b=100;
    console.log("inner is box ",b);
}
console.log("outer is global ,",b);
