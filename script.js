const toggleBtn = document.querySelector('.toggle');
const priceElements = document.querySelectorAll('.card h1');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('right');

    if (toggleBtn.classList.contains('right')) {
        priceElements.forEach((element) => {
            element.textContent = '$199.99';
            element.textContent = '$299.99'
        });
    } else {
        priceElements.forEach((element) => {
            element.textContent = '$19.99';
        });
    }
});
