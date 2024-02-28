const form = document.querySelector('form')
//this usecase give empty value
// const height = parseInt(document.querySelector('#heightt').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector("#results")
    const analysing = document.querySelector("#weight-guide")
    if (height === "" || height < 0 || isNaN(height) && weight === "" || height < 0 || isNaN(weight)){
        results.innerHTML  = "Please enter a valid height & weight"
    }


    else if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "please give a valid height"

    }
    else if(weight === "" || height < 0 || isNaN(weight)){
        results.innerHTML = "please give a valid weight"

    }
    else {
        const BMI = (weight/((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>${BMI}</span>`

        if (BMI < 18.6){
            analysing.innerHTML = "Under wweight"
        }
        else if (BMI >=18.6 && BMI <= 24.9){
            analysing.innerHTML = "normal weight"
        }
        else{
            analysing.innerHTML = "Over weight"
        }
    }


})