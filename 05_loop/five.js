const coding = ["js","rb","java","cpp","python"]

// coding.forEach((item) =>{
//     console.log(item);
// } )


// function printmy(item){

//     console.log(item);

// }

// coding.forEach(printmy)


const mycoding = [
    {
        languageName: "python",
        languageFileName: 'py'
    },
    {
        languageName: "JavaScript",
        languageFileName: 'js'
    },
    {
        languageName: "ruby",
        languageFileName: 'rb'
    },
]

mycoding.forEach((item,index,arr) => {
    console.log(item);
    // console.log(index);
    // console.log(arr);
})

