const getButton = document.querySelector('button')
const getUl = document.querySelector('ul')
const getInput = document.querySelector('input')

getButton.onclick = function () {
    const createNewLi = document.createElement('li')
    createNewLi.textContent = getInput.value
    getUl.append(createNewLi)
    getInput.value = ''
}