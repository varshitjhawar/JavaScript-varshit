//for

// for(let i = 0; i <= 10; i++){
//     console.log(`outer loop ${i}`)
//     for(let y = 0; y <= 10; y++){
//         console.log(`inner loop ${y}`);
//     }
// }


//multiplication

// function mul (num) {
//     for (let i = 1; i <= 10; i++){
//         let multiplication = num * i
//         console.log(`${num} * ${i} = ${multiplication}`);
//     }
    
// }
// mul(5)


// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++){
//     const element = myArray[i]
//     console.log(element);
// }



//break and continue

for (i = 1; i<=20; i++){
    if (i == 5){
        console.log("deteced");
        // break
        continue
    }
    console.log(`value of i is ${i}`);

}