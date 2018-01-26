window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let scrollPosition = window.scrollY;
  if (scrollPosition > 400) {
    header.classList.add('header-bg');
  } else {
    header.classList.remove('header-bg');
  }
})