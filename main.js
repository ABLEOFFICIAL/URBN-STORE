// newsleteter slide
let info1 = document.getElementById('info-1');
let info2 = document.getElementById('info-2');


// direct to mens product params
let men = document.getElementById('men');
let women = document.getElementById('women');

// user account
let account = document.querySelector('#account');



// newsletter animation
window.addEventListener('load', () => {
    slidenewsIn();
})

slidenewsIn = () => {
    setTimeout(() => {
        info1.classList.add('hidden');
        info2.classList.remove('hidden');
        slidenewsOut();
    }, 3000)

}

slidenewsOut = () => {
    setTimeout(() => {
        info1.classList.remove('hidden');
        info2.classList.add('hidden');
        slidenewsIn();
    }, 3000)

}











// home when logged in 
let getUser = JSON.parse(localStorage.getItem('user'));
console.log(getUser);

// check if user is logged in
if (getUser){
    account.href = './user-profile/profile.html';
}
