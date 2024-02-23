// object

//singleton 

//object literals

const jsUser = {
    name: "Varshit",
    age: 18,
    class: 12,
    location: "Surat",
    email: "varshitj@gmail.com"
}

console.log(jsUser["email"]);
console.log(jsUser.email);

const mySym = Symbol("Varshit")
const mySym2 = Symbol("Varshit")

jsUser.greeting = function(){
    console.log("Hello,Good evening");
}

jsUser.greetingtwo = function(){
    console.log(`hello user ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());