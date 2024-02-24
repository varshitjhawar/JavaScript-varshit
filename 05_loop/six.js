// const coding = ["pyhon","js","java","cpp","C"]

// const myfn = coding.forEach((val) => {
//     return val
// })


// console.log(myfn);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// let newNum = myNum.filter((num) => {
//     return num > 5
//     // return num
// })

// console.log(newNum);



// newNum = []

// myNum.forEach((num) => {
//     if (num > 4){
//         newNum.push(num)
//     }
// })

// console.log(newNum);

// const newNum = []
// const addNum = myNum.filter((num) => {
//     return newNum.push(num + 10)
// })


// console.log(newNum);


//map function

// const newNum = myNum.map((num) => num +10) 
// console.log(newNum);
// const addNum = []
// myNum.forEach((num) => {
//     return addNum.push(num + 10)
// })
// console.log(addNum);


const newNum = myNum    
                .map((num)  => num * 10)
                .map((num) => num + 10)
                .filter((num) => num >=40)

console.log(newNum);                