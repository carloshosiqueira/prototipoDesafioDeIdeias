const etiquetas = document.getElementById('etiquetas');
let etiquetasData = []; // Array para armazenar os dados dos cards

async function criarCard(conteudo, numeroDoPedido) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = conteudo;

    // Adiciona o card ao DOM
    etiquetas.appendChild(card);

    // Armazena os dados no array
    etiquetasData.push({ numeroDoPedido, conteudo });
}

async function MundialTrading() {
    const conteudo = `
    <div class="header">
        <img src="../img/Logo.webp" alt="logo da jaguar">
    </div>
    <div class="dados">
        <p>Importado por:</p>
        <p>Mundial Trading S.A</p>
        <p>RUC 80082675-2</p>
        <p>Avelino Martinez 9956</p>
        <p>San Lorenzo - Paraguay</p>
    </div>
    `;
    await criarCard(conteudo, 1); // Armazenando o número do pedido
}

async function Martinar() {
    const conteudo = `
    <div class="header">
        <img src="../img/Logo.webp" alt="logo da jaguar">
    </div>
    <div class="dados">
        <p>Importado por MARTINAR S.A</p>
        <p>RUC 80033748-4</p>
        <p>Asunción - Paraguay</p>
    </div>
    `;
    await criarCard(conteudo, 2);
}

async function Mabsa() {
    const conteudo = `
    <div class="header">
        <img src="../img/Logo.webp" alt="logo da jaguar">
    </div>
    <div class="dados">
        <p>Representado e importado</p>
        <p>por: Mabsa</p>
        <p>RUC 80007444-0</p>
        <p>Asuncion - Paraguay</p>
    </div>
    `;
    await criarCard(conteudo, 3);
}

// Chama as funções
MundialTrading();
Martinar();
Mabsa();


// Buscar etiquetas
async function buscarEtiqueta(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    const numeroPedido = document.getElementById('numeroPedido').value;

    // Limpa as etiquetas atuais
    etiquetas.innerHTML = '';

    // Encontra o card correspondente ao número do pedido
    const etiqueta = etiquetasData.find(etiqueta => etiqueta.numeroDoPedido === Number(numeroPedido));

    if (etiqueta) {
        await criarCard(etiqueta.conteudo, etiqueta.numeroDoPedido);
    } else {
        etiquetas.innerHTML = '<p>Nenhuma etiqueta encontrada.</p>';
    }
}
