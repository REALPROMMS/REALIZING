const buttonEl = document.getElementById('button-main')
const dropDownMenuEl = document.getElementById('menu')
const openEL = document.querySelector('.open')

buttonEl.addEventListener('click', () => {
	dropDownMenuEl.style.display = dropDownMenuEl.style.display === 'none' ? 'flex' : 'none'

	openEL.style.display = openEL.style.display === 'block' ? 'none' : 'block'

	document.querySelector('.close').style.display = document.querySelector('.close').style.display === 'none' ? 'block' : 'none'
})

dropDownMenuEl.classList.toogle('animation--open-menu')
