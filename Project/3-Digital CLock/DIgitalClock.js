const time = document.getElementById("clock")




setInterval(function(){
    let date =new Date()
    // console.log(date.toLocaleTimeString());
    time.innerHTML = `${date}`
}, 1000)