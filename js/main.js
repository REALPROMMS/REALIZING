const buttonEl = document.getElementById('button-main')
let dropDownMenuEl = document.getElementById('menu')

buttonEl.addEventListener('click', () => {
	dropDownMenuEl.style.display = dropDownMenuEl.style.display === 'none' ? 'flex' : 'none'
})
