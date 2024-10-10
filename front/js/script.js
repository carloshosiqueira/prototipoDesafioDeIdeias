const etiquetas = document.getElementById('etiquetas');
let etiquetasData = []; // Array para armazenar os dados dos cards

async function criarCard(conteudo, numeroDoPedido, ruc) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = conteudo;

    // Adiciona o card ao DOM
    etiquetas.appendChild(card);

    // Armazena os dados no array
    etiquetasData.push({ numeroDoPedido, conteudo, ruc });
}

async function MundialTrading() {
    const conteudo = `
    <div class="header">
        <img src="./front/img/logo.jpg" alt="logo da jaguar">
    </div>
    <div class="dados">
        <p>Importado por:</p>
        <p>Mundial Trading S.A</p>
        <p>RUC 80082675-2</p>
        <p>Avelino Martinez 9956</p>
        <p>San Lorenzo - Paraguay</p>
    </div>
    `;
    await criarCard(conteudo, 1, '80082675-2'); // Armazenando o número do pedido
}

async function Martinar() {
    const conteudo = `
    <div class="header">
        <img src="./front/img/logo.jpg" alt="logo da jaguar">
    </div>
    <div class="dados">
        <p>Importado por MARTINAR S.A</p>
        <p>RUC 80033748-4</p>
        <p>Asunción - Paraguay</p>
    </div>
    `;
    await criarCard(conteudo, 2, '80033748-4');
}

async function Mabsa() {
    const conteudo = `
    <div class="header">
        <img src="./front/img/logo.jpg" alt="logo da jaguar">
    </div>
    <div class="dados">
        <p>Representado e importado</p>
        <p>por: Mabsa</p>
        <p>RUC 80007444-0</p>
        <p>Asuncion - Paraguay</p>
    </div>
    `;
    await criarCard(conteudo, 3, '80007444-0');
}

// Chama as funções
MundialTrading();
Martinar();
Mabsa();

// Buscar etiquetas
// Buscar etiquetas por RUC
async function buscarPorRuc(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    const ruc = document.getElementById('ruc').value.trim(); // Remove espaços em branco

    // Limpa as etiquetas atuais
    etiquetas.innerHTML = '';

    // Encontra o card correspondente ao RUC fornecido 
    const etiqueta = etiquetasData.find(etiqueta => etiqueta.ruc === ruc);

    if (etiqueta) {
        await criarCard(etiqueta.conteudo, etiqueta.numeroDoPedido, etiqueta.ruc);
    } else {
        etiquetas.innerHTML = '<p>Nenhuma etiqueta encontrada.</p>';
    }
}

// Buscar etiquetas por número do pedido
async function buscarPorNumeroPedido(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    const numeroDoPedido = document.getElementById('numeroDoPedido').value.trim(); // Captura o número do pedido

    // Limpa as etiquetas atuais
    etiquetas.innerHTML = '';

    // Encontra o card correspondente ao número do pedido fornecido 
    const etiqueta = etiquetasData.find(etiqueta => 
        etiqueta.numeroDoPedido.toString() === numeroDoPedido
    );

    if (etiqueta) {
        await criarCard(etiqueta.conteudo, etiqueta.numeroDoPedido, etiqueta.ruc);
    } else {
        etiquetas.innerHTML = '<p>Nenhuma etiqueta encontrada.</p>';
    }
}

// Adicione os listeners para os formulários
document.getElementById('formRuc').addEventListener('submit', buscarPorRuc);
document.getElementById('formNumeroPedido').addEventListener('submit', buscarPorNumeroPedido);
