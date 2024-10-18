const buttonEl = document.getElementById('button-main')
const dropDownMenuEl = document.getElementById('menu')
const openEL = document.querySelector('.open')
const closeEl = document.querySelector('.close')

buttonEl.addEventListener('click', () => {
	dropDownMenuEl.style.display = dropDownMenuEl.style.display === 'none' ? 'flex' : 'none'

	openEL.style.display = openEL.style.display === 'block' ? 'none' : 'block'

	closeEl.style.display = closeEl.style.display === 'none' ? 'block' : 'none'
})
