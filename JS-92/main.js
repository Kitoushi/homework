document.addEventListener("DOMContentLoaded", function() {
  const openModalButton = document.querySelector('.btn-open');
  const modal = document.querySelector('.modal');
  const closeModalButton = document.querySelector('.modal__close-btn');

  openModalButton.addEventListener('click', function() {
    modal.style.display = 'flex';
    document.body.classList.add('body--fixed');
  });

  closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.classList.remove('body--fixed');
  });
});
