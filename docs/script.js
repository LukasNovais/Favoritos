document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    function activateTab(tabId) {
        // 1. Remove o destaque de todos os botões
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // 2. Esconde todos os painéis de conteúdo
        tabPanels.forEach(panel => {
            panel.classList.remove('active');
            panel.style.display = 'none';
        });

        // 3. Destaca o botão clicado
        const clickedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }

        // 4. Exibe e aplica o efeito "fade-in" no conteúdo correto
        const activePanel = document.getElementById(tabId);
        if (activePanel) {
            activePanel.style.display = 'block';
            
            // Pequeno atraso para o efeito de transição funcionar
            setTimeout(() => {
                activePanel.classList.add('active');
            }, 10);
        }
    }

    // Adiciona o evento de clique aos botões
    tabButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const tabId = event.currentTarget.dataset.tab;
            activateTab(tabId);
        });
    });

    // Inicia a primeira aba ao carregar a página
    activateTab('tab1');
});