const close = document.querySelector('.close')
const alert = document.querySelector('.alert')
close.addEventListener('click', () => {
    hide(alert)
})
function hide(elem) {
    elem.style.display = 'none'
}