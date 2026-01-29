const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('#hamburger');
const closeIcon = document.querySelector('#closeIcon');
const menuIcon = document.querySelector('#menuIcon');

function toggleMenu() {
  const isOpen = menu.classList.contains('translate-x-0');

  if (isOpen) {
    menu.classList.remove('translate-x-0');
    menu.classList.add('-translate-x-full');
    hamburger.className = 'fixed top-4 left-4 z-[100] bg-white rounded p-2';

    closeIcon.classList.add('hidden');
    menuIcon.classList.remove('hidden');
  } else {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
    hamburger.className = 'fixed top-4 right-64 z-[100] bg-white rounded p-2'

    closeIcon.classList.remove('hidden');
    menuIcon.classList.add('hidden');
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(item => {
  item.addEventListener('click', toggleMenu);
});
