'use strict';

// todo4: use of x button to close
// todo5: add event listner for esc key
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalButtons = document.querySelectorAll('.show-modal');
const closeButton = document.querySelector('.close-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const showModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

for (let i = 0; i < modalButtons.length; ++i) {
    modalButtons[i].addEventListener('click', showModal);
}