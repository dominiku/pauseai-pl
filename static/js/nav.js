document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-toggle').addEventListener('click', function () {
        const menu = document.getElementById('nav-menu');
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('open');
        this.textContent = expanded ? '☰' : '✕';
    });
});