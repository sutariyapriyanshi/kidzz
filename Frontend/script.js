const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');

sidebarClose.addEventListener('click', () => {
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
});