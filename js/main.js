const modalWindow = document.querySelector('.modal')
      buttonsModal = document.querySelectorAll('.button-play')
      iframe = document.querySelector('iframe')
      modalContainer = document.querySelector('.modal__inner')

buttonsModal.forEach(btn => {
    btn.addEventListener('click', () => {
        modalWindow.classList.add('active');
    })
})

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active')
    iframe.remove()
    modalContainer.append(iframe)
})

