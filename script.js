// 1. Calculadora de Impacto Ambiental
function calcularArvores() {
    const folhas = document.getElementById('folhasInput').value;
    const resultadoDiv = document.getElementById('resultadoCalculo');
    const spanArvores = document.getElementById('arvoresSalvas');

    if (folhas && folhas > 0) {
        // Regra de negócio simples: 1 árvore rende em média 10.000 folhas de papel.
        // O cálculo multiplica por 12 para dar a estimativa anual.
        const usoAnual = folhas * 12;
        const arvores = (usoAnual / 10000).toFixed(1);

        spanArvores.innerText = arvores;
        
        // Remove a classe d-none do Bootstrap para exibir o resultado suavemente
        resultadoDiv.classList.remove('d-none');
        resultadoDiv.classList.add('fade-in');
    } else {
        alert("Por favor, insira um número válido de folhas.");
        resultadoDiv.classList.add('d-none');
    }
}

// 2. Interatividade do Formulário de Contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    // Impede a página de recarregar (padrão de sites Single Page)
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    
    // Alerta de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada. Juntos por um mundo mais sustentável!`);
    
    // Limpa o formulário
    this.reset();
});
