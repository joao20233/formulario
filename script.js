const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordconfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    checkForm();

})

email.addEventListener("blur", () => {
    checkInputEmail()
})

username.addEventListener("blur", () => {
    checkInputUsername()
})

password.addEventListener("blur", () => {
    checkInputPassword()
} )

passwordconfirmation.addEventListener("blur", () => {
    checkInputPasswordconfirmation();
})


function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        //mostrar um aviso e uma mensagem de erro.
        errorInput(username, "preencha um username")
       }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
       }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "preencha um email")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }    
    
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(password === ""){
        errorInput(password, "a senha é obrigatoria.")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no minimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordconfirmation(){
    const passwordValue = password.value;
    const confirmationpasswordValue = passwordconfirmation.value;

    if(confirmationpasswordValue === ""){
        errorInput(passwordconfirmation, "a confirmacao de senha é obrigatoria.")
    }else if(confirmationpasswordValue !== passwordValue){
        errorInput(passwordconfirmation, "As senhas nao sao iguais.")
    }else{
        const formItem = passwordconfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordconfirmation();

    const formItem = form.querySelectorAll(".form-content")

    const isValid = [...formItem].every ( (item) => {
        return item.className === "form-content"
    });
if(isValid){
    alert("CADASTRADO COM SUSSESO!")
}

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}