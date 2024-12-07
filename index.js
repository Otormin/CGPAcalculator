let calculateUl= document.getElementById("calculate-ul")
let createBtn = document.getElementById("create-btn")
let submitBtn = document.getElementById("submit-btn")
let header3El = document.getElementById("header3-El")

createBtn.addEventListener("click", function(){
    let amountOfSemestersElement = parseInt(document.getElementById("amountOfSemesters-El").value)

    if(!amountOfSemestersElement){
        alert("Amount field cannot be null")
        return false
    }

    if(amountOfSemestersElement <= 0){
        alert("Amount field must be more than 0")
        return false
    }

    let list = ""
    for(let i = 0; i < amountOfSemestersElement; i++){
        list += `<li>
        <input type="number" step="0.01" min="0" placeholder="GPA" id="GPA-textbox-${i}" class="calculate">
        </li>`
    }
    calculateUl.innerHTML = list
    submitBtn.style.display = "block"

    submitBtn.addEventListener("click", submitButton)
})

function validation(){
    let amountOfSemestersElement = parseInt(document.getElementById("amountOfSemesters-El").value)

    for(let i = 0; i < amountOfSemestersElement; i++){
        storeValues = parseInt(document.getElementById(`GPA-textbox-${i}`).value)
        if(storeValues > 5.00 || storeValues < 0){
            alert("GPA cannot be higher than 5.00 or lower than 0")
            return false
        }

        if(!storeValues){
            alert("GPA field cannot be empty")
            return false
        }
        
        return true
    }
}

function submitButton(){
    let amountOfSemestersElement = parseInt(document.getElementById("amountOfSemesters-El").value)
    let sumOfValues = 0
    let storeValues = 0

    if(validation()){
        for(let i = 0; i < amountOfSemestersElement; i++){
            storeValues = parseInt(document.getElementById(`GPA-textbox-${i}`).value)
            sumOfValues += storeValues
        }
    
        let CGPA = sumOfValues/amountOfSemestersElement
    
        if(!CGPA){
            header3El.innerHTML = ` `
            return
        }
        else{
            header3El.innerHTML = `Your CGPA is: ${CGPA.toFixed(2)}`
        }
    }
}

submitBtn.addEventListener("click", submitButton)