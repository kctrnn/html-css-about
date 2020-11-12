window.addEventListener('load', () => {
  const navToggle = document.querySelector('.top-nav__toggle');

  navToggle?.addEventListener('click', () => {
    const menu = document.querySelector('.menu');

    menu.classList.toggle('show');
  });
});
