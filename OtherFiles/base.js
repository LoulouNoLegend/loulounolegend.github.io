// Navigation Bar
window.onload = function() {
    var dropdown = document.querySelector('.navbar_dropdown');
    var dropdownContent = document.querySelector('.navbar_dropdown-content');

    dropdown.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
};