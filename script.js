const toggleBtn = document.querySelector('.toggle');
const priceElements = document.querySelectorAll('.card h1');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('left');

    if (toggleBtn.classList.contains('left')) {
        priceElements[0].textContent = '$199.99';
        priceElements[1].textContent = '$249.99';
        priceElements[2].textContent = '$399.99';
    } else {
        priceElements[0].textContent = '$19.99';
        priceElements[1].textContent = '$24.99';
        priceElements[2].textContent = '$39.99';
    }
});
