const programming = ["JS","rb","py","java","cpp"]

for (const [key,value] in programming) {
    console.log(programming[key]);
}


const myObj = {
    py: "python",
    js: "Java Script",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObj){
    console.log(`${key} in myObj for value ${myObj[key]}`);
}