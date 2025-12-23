'use strict';

// Define variable and function first
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseMedal = document.querySelector('.close-modal');
const btnOpenMedal = document.querySelectorAll('.show-modal');

// Open the modal
const openModal = function () {
  console.log(`Button (White Box) clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Exit to the main screen
const closeModal = function () {
  console.log(`Button X clicked`);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//----------------------------------------------------------------------

/* 
for (let i = 0; i < btnOpenMedal.length; i++) {
  console.log(btnOpenMedal[i]);
}
*/

// "Click to the button "Show modal"
for (let i = 0; i < btnOpenMedal.length; i++) {
  btnOpenMedal[i].addEventListener('click', openModal);
}

// "Button X clicked to exit to the main screen"
btnCloseMedal.addEventListener('click', closeModal);

// "Background (Overlay) clicked to exit to the main screen"
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && modal.classList.contains('hidden')) closeModal;
});
