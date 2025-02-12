// back button
let backBtn = document.getElementById('back-btn');
// get user details from local storage
let userProfile = JSON.parse(localStorage.getItem('user'));
// user details
let userName = document.getElementById('user-name');
let userEmail = document.getElementById('user-email');
let userBlock = document.getElementById('user-block');

// add back btn event
backBtn.addEventListener('click', () => {
    window.history.back();
})

// function to display user details
function displayUserDetails(){
    userBlock.innerHTML = `
                    <div class=" flex justify-center">
                    <i class="fa-regular fa-user text-white bg-black text-4xl border-0 rounded-full p-6 mb-3"></i>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <p id="user-name" class="font-bold">${userProfile.name}</p>
                </div>
                <div class="mt-5">
                    <!-- email box -->
                    <div class="flex gap-3 border-2 border-black rounded w-[90%] px-3 py-2 mb-4">
                        <div><i class="fa-regular fa-envelope text-3xl"></i></div>
                        <div>
                            <h4 class="font-bold text-lg">Email Address</h4>
                            <span id="user-email" class="text-neutral-600 text-[12px]">${userProfile.email}</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-pen"></i>
                        </div>
                    </div>
                    <!-- phone number box -->
                    <div class="flex gap-3 border-2 border-black rounded w-[90%] px-3 py-2 mb-4">
                        <div><i class="fa-solid fa-phone text-3xl"></i></div>
                        <div>
                            <h4 class="font-bold text-lg">Mobile Number</h4>
                            <span class="text-neutral-600"></span>
                        </div>
                        <div>
                            <i class="fa-solid fa-pen"></i>
                        </div>
                    </div>
                    <!-- location box -->
                    <div class="flex gap-3 border-2 border-black rounded w-[90%] px-3 py-2">
                        <div><i class="fa-solid fa-location-dot text-3xl"></i></div>
                        <div>
                            <h4 class="font-bold text-lg">Home Address</h4>
                            <span class="text-neutral-600"></span>
                        </div>
                        <div>
                            <i class="fa-solid fa-pen"></i>
                        </div>
                    </div>
                </div>`;
}

displayUserDetails();