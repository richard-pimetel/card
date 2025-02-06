'use strict';

// Dados para o menu
const categorias = [
    { nome: 'Bicicleta', icon: 'bicicleta icon.png', cor: 'red' },
    { nome: 'Celular', icon: 'celular icon.png', cor: 'blue' },
    { nome: 'Computador', icon: 'computador icon.png', cor: 'pink' },
    { nome: 'Tenis', icon: 'tenis icon.png', cor: 'green' }
];

// Dados para os cards (com imagens e avaliações)
const produtos = [
    { nome: 'Bicicleta', descricao: 'BICICLETA ELÉTRICA GTSM1 ARO 20 MOTOR TRASEIRO FREIO A DISCO CÂMBIO SHIMANO 7 MARCHAS E AMORTECEDOR | GTS M1 ELÉTRICA V8S 2.0 750W 15 AH.', preco: 8142, imagem: 'bicicleta.webp', avaliacao: 5 },
    { nome: 'Celular', descricao: 'O Nubia Red Magic 9 Pro+ o lançamento oficial aconteceu em novembro de 2023 e atraiu a atenção dos gamers profissionais, devido às suas especificações de alto desempenho.', preco: 9678, imagem: 'celular.webp', avaliacao: 5 },
    { nome: 'Computador', descricao: 'PC Gamer Ryzen 7 7800X3D, RTX 4070 Super, 32GB DDR5 RGB, SSD NVMe 2TB,', preco: 20375, imagem: 'pc.webp', avaliacao: 5 },
    { nome: 'Tenis', descricao: 'Inspire-se com Tesla Skateboards! Coloque seu NIN9 nos pés, pegue seu skate, chame seus amigos e ocupe a cidade de forma intensa e memorável.', preco: 499.99, imagem: 'tenis.webp', avaliacao: 5 }
];

// Função para criar o menu
function criarMenu(categoria) {
    const novoItem = document.createElement('li');
    const novaImagem = document.createElement('img');
    const novoSpan = document.createElement('span');
    const lista = document.getElementById('menu');

    novaImagem.src = `./img/${categoria.icon}`;
    novoSpan.textContent = categoria.nome;
    novoItem.style = `--cor-hover: ${categoria.cor}`;

    novoItem.appendChild(novaImagem);
    novoItem.appendChild(novoSpan);

    lista.appendChild(novoItem);
}

// Função para criar as estrelas
function criarEstrelas(avaliacao) {
    const estrelasCheias = Math.floor(avaliacao);
    const temMeiaEstrela = avaliacao % 1 !== 0;
    const estrelasVazias = 5 - estrelasCheias - (temMeiaEstrela ? 1 : 0);

    let estrelasHTML = '';

    for (let i = 0; i < estrelasCheias; i++) {
        estrelasHTML += '⭐';
    }

    if (temMeiaEstrela) {
        estrelasHTML += '<span class="meia-estrela">⭐</span>';
    }

    for (let i = 0; i < estrelasVazias; i++) {
        estrelasHTML += '☆';
    }

    return estrelasHTML;
}

// Função para criar os cards
function criarCard(produto) {
    const card = document.createElement('div');
    card.classList.add('card');

    const imagem = document.createElement('img');
    imagem.src = `./img/${produto.imagem}`;
    imagem.alt = produto.nome;
    imagem.classList.add('card-img');

    const titulo = document.createElement('h3');
    titulo.textContent = produto.nome;

    const descricao = document.createElement('p');
    descricao.textContent = produto.descricao;

    const preco = document.createElement('p');
    preco.classList.add('price');
    preco.textContent = `$${produto.preco.toFixed(2)}`;

    const avaliacao = document.createElement('div');
    avaliacao.classList.add('avaliacao');
    avaliacao.innerHTML = criarEstrelas(produto.avaliacao);

    const botao = document.createElement('button');
    botao.textContent = 'Buy Now';

    botao.addEventListener('click', () => {
        alert(`Você comprou: ${produto.nome}`);
    });

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(preco);
    card.appendChild(avaliacao);
    card.appendChild(botao);

    return card;
}

// Função para adicionar os cards ao container
function adicionarCards() {
    const container = document.querySelector('.cards-container');
    produtos.forEach(produto => {
        const card = criarCard(produto);
        container.appendChild(card);
    });
}

// Inicializa o menu e os cards
categorias.forEach(criarMenu);
adicionarCards();