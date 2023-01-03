const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const navbar = document.querySelector('.navbar');
const myBtn = document.querySelector('#myBtn');
const date = document.querySelector('#date');

hamburger.addEventListener('click', () => {
  if (navLink.style.display === 'none') {
    navLink.style.display = 'block';
  } else {
    navLink.style.display = 'none';
  }
});

navLink.addEventListener('click', () => {
  navLink.style.display = 'none';
});

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = 'block';
    navbar.style.height = '60px';
    navLink.style.top = '50px';
  } else {
    myBtn.style.display = 'none';
    navbar.style.height = '100px';
    navLink.style.top = '80px';
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

myBtn.addEventListener('click', topFunction);

date.textContent = `Copyright © ${new Date().getFullYear()}`;
