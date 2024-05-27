document.addEventListener('DOMContentLoaded', function () {
    // Navegação suave para âncoras
    const links = document.querySelectorAll('nav a, .cta-button');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }

    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove a classe 'active' de todas as abas e conteúdos
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona a classe 'active' apenas na aba clicada e no conteúdo correspondente
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });


    // Botão de voltar ao topo
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Menu responsivo
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });

    // Formulário de inscrição
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validar campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || telefone === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Enviar formulário
        // Enviar formulário (simulação)
        // Aqui você pode adicionar lógica para enviar os dados do formulário para o backend
        // Neste exemplo, vamos apenas exibir uma mensagem de sucesso
        const modal = document.getElementById('modal');
        const modalClose = document.querySelector('.modal-close');

        modal.style.display = 'block'; // Exibir o modal

        modalClose.addEventListener('click', function () {
            modal.style.display = 'none'; // Fechar o modal ao clicar no botão de fechar
        });

        // Limpar campos do formulário após o envio
        form.reset();
    });
});
