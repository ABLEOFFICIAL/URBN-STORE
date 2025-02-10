let form = document.querySelector('#form');
let fullName = document.getElementById('full-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
// hide and show password button
let showPassword = document.querySelectorAll('#show-password');
let hidePassword = document.querySelectorAll('#hide-password');


// event ov submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputs = [fullName, email, password, confirmPassword];
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordFormat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // error function
    function error(label, message){
        let invalid = document.createElement('p');
        invalid.classList.add('text-red-500', 'absolute', 'top-1', 'right-3', 'border-2', 'border-red-500', 'rounded-full', 'px-2.5', 'py-1', 'text-xs', 'text-center', 'invalid-message');
        invalid.textContent = message;
        label.parentElement.appendChild(invalid);
        setTimeout(() => {
            invalid.classList.add('hidden');
        }, 2000)
    }

    inputs.forEach(input => {
        if(input.value.trim() === ''){
            e.preventDefault();
            error(input, 'i');
        }
        else if(!emailFormat.test(inputs[1].value)){
            error(inputs[1], 'i');
        }
        else if(!passwordFormat.test(inputs[2].value)){
            error(inputs[2], 'i');
        }
        else if(inputs[2].value.trim() !== inputs[3].value.trim()){
            e.preventDefault();
            error(inputs[3], 'i');
        }else {
            // next page to login after registeration
            window.location.href = '../login/login.html';
        }
        })

        // save to local storage
        localStorage.setItem('user', JSON.stringify({
            fullName, email, password
        }))
   
    })

    // show password event
    showPassword.forEach(button => {
    button.addEventListener('click', (e) => {
        button.previousElementSibling.type = 'text'
        button.classList.add('hidden');
        button.nextElementSibling.classList.remove('hidden');
    })

    // hode password event
    hidePassword.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.firstElementChild.type = 'password';
            button.classList.add('hidden');
            button.previousElementSibling.classList.remove('hidden');
        })
    })
})