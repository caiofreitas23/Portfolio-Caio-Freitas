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

    // Monta o link do Gmail com os dados preenchidos
    const destinatario = 'SEU_EMAIL@gmail.com'; // 👈 troque pelo seu Gmail
    const assunto = encodeURIComponent(`Mensagem de ${nome} - Portfólio`);
    const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`);
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${destinatario}&su=${assunto}&body=${corpo}`;

    window.open(gmailURL, '_blank');

    feedback.style.color = '#68d391';
    feedback.textContent = '✅ Redirecionando para o Gmail...';

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}
