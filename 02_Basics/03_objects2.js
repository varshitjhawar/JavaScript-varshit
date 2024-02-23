//tinder user 

const tinderuser = {}

tinderuser.id = "123abc"

console.log(tinderuser);
tinderuser.name = "Varshit"
tinderuser.idlogin = true

// console.log(tinderuser)

const regularuser = {
    email: "varshitj@gmail.com",
    fullName: {
        userFullname: {
            FirstName: "Varshit",
            lastName: "Jhawar"
        }
    }
}
console.log(regularuser.fullName.userFullname.lastName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
// const obj3 = {obj1,obj2}
// console.log(obj3);

const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);
console.log(tinderuser.hasOwnProperty('idlogin'));