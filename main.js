// newsleteter slide
let info1 = document.getElementById('info-1');
let info2 = document.getElementById('info-2');


// direct to mens product params
let men = document.getElementById('men');
let women = document.getElementById('women');
// user account
let account = document.querySelector('#account');
// account on nav
let accountIcon = document.getElementById('account-icon');
let anchor = accountIcon.querySelector('a');
// night mood
let moodChange = document.getElementById('night-mood');
let moodText = document.getElementById('mood-text');





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
    anchor.href = './user-profile/profile.html'
}

moodChange.addEventListener('click', () => {
    nightMood();
    moodText.textContent = 'LIGHT MOOD'
})

// light and dark mood function
function nightMood() {
    document.body.classList.remove('bg-neutral-200');
    document.body.classList.add('bg-black', 'text-white');
};

function lightMood() {
    document.body.classList.remove('bg-black', 'text-white');
    document.body.classList.add('bg-black', 'text-white');
};