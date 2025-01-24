// Add click event listeners for navigation buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Redirecting to: ' + this.textContent);
    });
});
