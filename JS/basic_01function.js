// define a function: defination 
function saymyname()
{
    console.log("shivam");
};

// call a function
saymyname();
//return function to acces out of box value to  outer 
function addtwownumber(number1,number2){
    let sum1= number1+number2;
    return sum1;
    console.log(sum1);
}
console.log(addtwownumber(1,2));

//console.log(sum1) not work outer because it is defined in  local scope of function

// to access function by the ` this $ 
function user(username){
    return `${username}just_loggin `
   
}
console.log(user("shivamji"));

// fun with spread opertor 
function calculatenumber(...number1){
    
    return number1;}
    console.log(calculatenumber(100,2000,10000));

// more fun 
// fun with spread opertor 

function calculatenumber(val1,val2,...number1){
    console.log(val1);
    console.log(val2);
    return number1;}
    console.log(calculatenumber(100,2000,10000,2999,40000));



