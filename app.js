'use script'


const categorias = [
    {nome: 'Celulares', icon: 'telefone.png', cor: 'red'},
    {nome: 'Informatica', icon: 'pc.png', cor: 'blue'},
    {nome:'Games', icon: 'controle.png', cor: 'pink'},
    {nome:'Moveis', icon: 'mesa.png', cor: 'green'}
]


function criarMenu ( categoria) {

    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista  = document.getElementById('menu')


    novaImagem.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome
    novoItem.style = `--cor-hover: ${categoria.cor}`

    

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)

    lista.appendChild(novoItem)

    

}


categorias.forEach(criarMenu)

