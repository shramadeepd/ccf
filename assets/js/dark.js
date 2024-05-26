const darkModeToggle = document.getElementById('darkModeToggle');
const container = document.querySelector('.container');

darkModeToggle.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
});
