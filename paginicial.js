function toggleDark() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('toggle-dark');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('dark', document.body.classList.contains('dark'));
}

// Lembra a preferência do usuário
if (localStorage.getItem('dark') === 'true') {
    document.body.classList.add('dark');
    document.getElementById('toggle-dark').textContent = '☀️';
}