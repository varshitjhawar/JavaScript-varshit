//reduce

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.reduce((acc,curVal) => {
    console.log(`${acc} accumulator ${curVal} Current Value`);
    return acc + curVal
}, 0)

console.log(newNum);