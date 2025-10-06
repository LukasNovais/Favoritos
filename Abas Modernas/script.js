document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // Função principal para trocar de aba
    function activateTab(tabId) {
        // 1. Desativa todos os botões e painéis (conteúdos)
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        tabPanels.forEach(panel => {
            // Remove a classe 'active' para iniciar o efeito de 'fade-out'
            panel.classList.remove('active');
            panel.style.display = 'none';
        });

        // 2. Ativa o botão clicado
        const clickedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }

        // 3. Exibe o painel de conteúdo correspondente com o efeito de transição
        const activePanel = document.getElementById(tabId);
        if (activePanel) {
            // Define display: block antes de aplicar a opacidade
            activePanel.style.display = 'block';
            
            // Pequeno timeout (10ms) é crucial para que o navegador reconheça a mudança 
            // e inicie a transição de opacidade definida no CSS (o efeito "fade").
            setTimeout(() => {
                activePanel.classList.add('active');
            }, 10);
        }
    }

    // Adiciona o evento de clique a todos os botões de aba
    tabButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const tabId = event.currentTarget.dataset.tab;
            activateTab(tabId);
        });
    });

    // Garante que a primeira aba esteja ativa ao carregar a página
    activateTab('tab1');
});