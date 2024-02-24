// for of

const myArray = ["Varshit","shivangi","varun","Narayan"]

// for (const name of myArray) {
//     console.log(name);
// }


const name = "Varshis Jhawar"

for (const greet of name) {
    console.log(greet);
}

const map = new Map()

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key ,":-", value);
    
}

const myObj = {
    "Game": "Cricket",
    "Century": 50,
    "Format": "ODI",
    "PlayerName": "Virat Kohli"
}

console.log(myObj);





