// function addTwoNumber(NUM1, NUM2){
//     let sum = NUM1+NUM2
//     console.log(sum);
// }




// addTwoNumber(3,4)


function userName(userName){
    if (userName === undefined){
        console.log("Please enter a usernmae");
        return
    }
    return `${userName} just log in`
}


// console.log(userName("varshit"));

function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(100,200,300));

const user = {
    username: "VArshit",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} price is ${anyObject.price}`);
}

handleObject(user)