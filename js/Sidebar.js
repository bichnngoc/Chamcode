document.getElementById('user-dropdown').addEventListener('click', function () {
  var dropdownMenu = this.querySelector('.dropdown-menu');
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
});
