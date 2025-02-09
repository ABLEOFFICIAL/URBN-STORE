let form = document.querySelector('#form');
let fullName = document.getElementById('full-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

// event ov submit
form.addEventListener('submit', (e) => {

    let inputs = [fullName, email, password, confirmPassword];
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
        if(input.value === ''){
            e.preventDefault();
            error(input, 'i');
        }
        })
    })