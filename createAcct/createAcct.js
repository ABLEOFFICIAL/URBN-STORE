let form = document.querySelector('#form');
let fullName = document.getElementById('full-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

// event ov submit
form.addEventListener('submit', (e) => {

    let inputs = [fullName, email, password, confirmPassword];
    inputs.forEach(input => {
        if(input.value === ''){
            e.preventDefault();
            function error(){
                let alertError = document.createElement('p');
                // alertError.className = 'fa-solid fa-circle-exclamation';
                alertError.classList.add('text-red-500', 'absolute', 'top-1', 'right-0', 'border-2', 'rounded-full', 'p-2');
                input.parentElement.appendChild(alertError);
                setTimeout(() => {
                    alertError.remove();
                }, 2000)
            };

            error();
        }
    })
    // if((fullName.value === '') || (email.value === '') || (password.value === '') || (confirmPassword.value === '')){
    //     e.preventDefault();
    //     let alert = document.createElement('i');
    //     alert.className = 'fa-solid fa-circle-exclamation';
    //     alert.classList.add('text-red-500');
    //     console.log(alert);
        
        
    })
// })