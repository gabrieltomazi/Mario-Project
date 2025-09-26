let form = document.querySelector(".send-form")
let mask = document.querySelector(".form-mask")

function showForm(){
    form.style.left = "800px"
    mask.style.visibility = "visible"
}

function sendForm(){
    form.style.left = "-320px"
}

function closeForm(){
    form.style.left = "-320"
}
