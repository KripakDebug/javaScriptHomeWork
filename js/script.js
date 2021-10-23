let btn = document.querySelector('.btn');
let modal = document.querySelector('.modal-window');
let btnModal = document.querySelector('.btn-js')
btn.addEventListener('click', () => {
    modal.style.opacity = '1';
});
btnModal.addEventListener('click', () => {
    modal.style.opacity = '0';
})