let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
// hide and show password button
let showPassword = document.querySelectorAll('#show-password');
let hidePassword = document.querySelectorAll('#hide-password');
// error user
let notFound = document.getElementById('not-found');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get items from local storage
    let storedDetails = localStorage.getItem('user');

    formDetails = [email, password];

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

    formDetails.forEach(detail => {
        if(detail.value.trim() === '') {
            error(detail, 'i');
        }else if(!storedDetails) {
            let notFoundMessage = document.createElement('span');
            notFoundMessage.classList.add('text-neutral-600', 'mt-3', 'text-center');
            notFoundMessage.textContent = 'User not found!!!';
            notFound.appendChild(notFoundMessage);
        }else if((email.value !== storedDetails.email) || (password.value !== storedDetails.password)){
            error(detail, 'i');
            password.classList.add('border-2', 'border-red-500');
            setTimeout(() => {
                password.classList.remove('border-2', 'border-red-500')
            }, 2000)
        }else if((email.value === storedDetails.email) || (password.value === storedDetails.password)){
            alert('Login Successfull!!!');
        }
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

})