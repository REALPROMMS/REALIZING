const buttonEl = document.getElementById('button-main');
const dropDownMenuEl = document.getElementById('menu');
const openEL = document.querySelector('.open');
const closeEl = document.querySelector('.close');

function toggleMenu() {
	dropDownMenuEl.classList.toggle('hidden');
	openEL.classList.toggle('hidden');
	closeEl.classList.toggle('hidden');
}

buttonEl.addEventListener('click', toggleMenu);
