const toggleBtn = document.querySelector('.toggle');
const priceElement = document.querySelector('.card h1');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('right');

    if (toggleBtn.classList.contains('right')) {
        priceElement.textContent = '$199.99';
    } else {
        priceElement.textContent = '$19.99';
    }
});
