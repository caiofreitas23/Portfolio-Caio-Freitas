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
function enviarMensagem() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const feedback = document.getElementById('feedback-envio');

    if (!nome || !email || !mensagem) {
        feedback.style.color = '#fc8181';
        feedback.textContent = '⚠️ Por favor, preencha todos os campos.';
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        feedback.style.color = '#fc8181';
        feedback.textContent = '⚠️ Digite um e-mail válido.';
        return;
    }

    feedback.style.color = '#68d391';
    feedback.textContent = '✅ Mensagem enviada com sucesso!';

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}
