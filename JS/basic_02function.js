// object as input in function 
//indirect 
const object1= {
    username:"shivam",
    Price:200,
}

function calluser(anyuser){
    console.log( `username is $(anyuser.username)and price is $(anyuser.price)`);
}
calluser(object1);


// direct 
calluser (
    {username:"ji",
        price:200,

    }
)

// there is problem in access so please review it 

// array 
const newarray=["100","200"]

function returnsecvalue(getarray){
    return getarray[1];
}
console.log(returnsecvalue(newarray));