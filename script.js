const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const myBtn = document.querySelector('#myBtn');

hamburger.addEventListener('click', () => {
  navLink.style.display = 'block';
});

navLink.addEventListener('click', () => {
  navLink.style.display = 'none';
});

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = 'block';
  } else {
    myBtn.style.display = 'none';
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

myBtn.addEventListener('click', topFunction);

const date = document.querySelector('#date');

date.textContent = `Copyright © ${new Date().getFullYear()}`;
