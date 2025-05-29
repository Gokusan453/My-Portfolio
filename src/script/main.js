// theme toggle script
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;
    const currentMode = localStorage.getItem('mode') || 'dark';
    body.classList.add(currentMode + '-mode');
    updateToggleImage(currentMode);

    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('mode', 'light');
            updateToggleImage('light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
            updateToggleImage('dark');
        }
    });

    function updateToggleImage(mode) {
        const img = toggleButton.querySelector('img');
        if (mode === 'light') {
            img.src = 'src/images/icons/moon.png';
        } else {
            img.src = 'src/images/icons/sun.png';
        }
    }
});

// Preloader script
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});