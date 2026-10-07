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
    const destinatario = 'caiofreitasam.contatos@gmail.com';
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

// Lista de linguagens e tecnologias
const skills = [
    { name: 'Python', logo: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'C', logo: 'https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white' },
    { name: 'JavaScript', logo: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { name: 'HTML5', logo: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS3', logo: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'C++', logo: 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=cplusplus&logoColor=white'}
];

// Seleciona o contêiner no HTML
const skillsGrid = document.getElementById('skills-grid');

// Função para renderizar os cards na tela
function renderSkills() {
    skills.forEach(skill => {
        // Cria a div estrutural do card
        const card = document.createElement('div');
        card.classList.add('skill-card');

        // Define o conteúdo interno (imagem + nome)
        card.innerHTML = `
            <img src="${skill.logo}" alt="Logo do ${skill.name}" loading="lazy">
            <p>${skill.name}</p>
        `;

        // Adiciona o card dentro da grid principal
        skillsGrid.appendChild(card);
    });
}

// Executa a função assim que a página carrega
document.addEventListener('DOMContentLoaded', renderSkills);

