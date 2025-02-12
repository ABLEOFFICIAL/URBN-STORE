// search bar background
let seacrhCtn = document.getElementById('seacrh-ctn');
// back button
let backBtn = document.getElementById('back-btn');

// add background to search bar on scroll
window.addEventListener('scroll', function(){
    if(window.scrollY > 30){
        seacrhCtn.classList.add('bg-white', 'shadow-2xl');
    }else{
        seacrhCtn.classList.remove('bg-white', 'shadow-2xl');  
    }
})

// add back btn event
backBtn.addEventListener('click', () => {
    window.history.back();
    
})