const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkForm();

    
})

email.addEventListener('blur', () => {
    checkInputEmail();
    
})

username.addEventListener('blur', () => {
    checkInputUsername();
})




function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === '') {
        errorInput(username, 'Fill in the username')
    } else {
        const formItem = username.parentElement;
        formItem.className = 'form-content'
    }

}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a')

    textMessage.innerText = message;

    formItem.className = 'form-content error'

}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === '') {
        errorInput(email, 'Email is mandatory...')
    } else {
        const formItem = email.parentElement;
        formItem.className = 'form-content'
    }

}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === '') {
        errorInput(password, 'Type your password...')
    } else if (passwordValue.length < 8) {
        errorInput(password, 'The password must be at least 8 characters long.')
    } else {
        const formItem = password.parentElement;
        formItem.className = 'form-content'
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "Password confirmation is mandatory.")
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "The passwords are not the same.")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")
    
    const isValid = [...formItens].every( (item) => {
        return item.className === 'form-content'
    });

    if(isValid) {
        alert('REGISTERED SUCCESSFULLY!')
    } 

}



function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a')

    textMessage.innerText = message;

    formItem.className = 'form-content error'

}