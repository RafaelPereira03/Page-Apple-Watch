const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')
const nomeCor = document.getElementById('nome-cor-selecionada')
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');





const verdeCipreste = {
    nome: ' Verde-cipreste ',
    pasta: 'imagens-verde-cipreste'
}

const meiaNoite ={
    nome:' Meia-noite ',
    pasta: 'imagens-meia-noite'
}

const estelar ={
    nome:' Estelar ',
    pasta:'imagens-estelar'
}

const rosaClaro ={
    nome: ' Rosa-claro ',
    pasta: 'imagens-rosa-claro'
}

const azulInverno = {
    nome: ' Azul-Inverno ',
    pasta: 'imagens-azul-inverno' //documento de identidade

};

//Lista - ArrayList
//para acessar um valor em pasta MinhaLista.pasta

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro]; 
const opcoesTamanho = [' 41mm ', ' 45mm '];


let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}

function trocarTamanho(){
    //atualizar variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //mudar o tamanho da imagem de acordo com a opção

    if(opcoesTamanho[tamanhoSelecionado] === '41mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }

    //mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva para caixa de" +opcoesTamanho[tamanhoSelecionado] + opcoesCores[corSelecionada].nome;

}


//trocar de cor de acordo as opções

function trocarCor(){
    //atualizar a cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name=opcao-cor]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva para caixa de" +opcoesTamanho[tamanhoSelecionado] + opcoesCores[corSelecionada].nome;

    //trocar nome da cor
    nomeCor.innerText = 'Cor - '+ opcoesCores[corSelecionada].nome;

    //trocar imagens das miniaturas exibidas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
    //trocar imagem de visualização
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}













































