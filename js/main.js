window.addEventListener('load', function () {
  const menuToggle = document.querySelector('.top-nav__toggle');

  menuToggle?.addEventListener('click', function () {
    const menu = document.querySelector('.top-nav__menu');
    menu.classList.toggle('show');
  });
});
