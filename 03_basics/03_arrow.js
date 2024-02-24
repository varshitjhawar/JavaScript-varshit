const user ={
    username: "Varshit",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);

    }

}

// user.welcomemessage()
// user.username = "Varun"
// user.welcomemessage()

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let userName = "Vashit"
//     console.log(this);
// }

const chai = () => {
    let userName = "Vashit"
    console.log(this);
}

chai()