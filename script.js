//Pegamos as infomacoes da tag la do HTML, que é responsavel por ta exibindo a imagem na nossa pagina, criamos a variavel no js, e agora consigo operar a minha tag via javascript por meio dessa variavel. 
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
  
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');


//Aqui vamos começar criando um objeto. O objeto no JavaScript funciona como uma carteira de Identidade, que vai conter um pacotinho de informações. Vai ficar entre as chaves {}.
//declaração + var (que vai ser meu objeto) + conteudo (texto, numero ou {objeto}.)
//const caixinha = {
//Cria as chaves e dentro você coloca ''campos'' dois pontos e o valor associado a cada campo. 
//nome: 'Daniel Porto',
//Um campo e outro são separados por uma virgula.
//idade: 30,
//Campos ou valores? (nome, idade, rg, cpf...)
//};

//Criaremos agora 5 objetos.

//Vamos botar exatamente o nome das cores e das pastas que estão as cores, o JS precisa conhecer os elementos e informações que estão nessa página, e isso que vai fazer essa conexão.

//Toda informação vai ser associada ao nome do campo.

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};


//Agora vamos entender oque é o ARRAY ou lista de informações, são a mesma coisa, a estrutura é essa, igual ao outro so que usamos colchetes []:


//Vamos supor que meus alunos fizeram prova, meu primeiro aluno tirou 6, o segundo 7, o terceiro 4, o outro 8, o outro 10. A representação seria a seguinte:

//const minhaLista = [6, 7, 4, 8, 10];
//elemento nº:  0  1  2  3  4

//Elemento: cada valor desse representa um elemento: [6,7,4,8,10], ao total cinco elementos diferentes, cada elemento é separado por virgula.        

//Na computação começamos as contagens pelo zero, tenho cinco elementos mas a contagem parte do zero.         

//Se eu quero acessar o terceiro elemento por exemplo o numero(indice) dele é 2:
//const minhaLista = [6, 7, 4, 8, 10];
//minhaLista[2] 

//Objeto e Array:
//Se quiser acessar um campo em particular do objeto:
//meiaNoite.pasta

//Acessar um valor em particular de uma lista, você acessa pelo indice: 
//minhalista[3]

//Agora vamos criar uma lista para os meus objetos la em cima do site apple:

const opcoesCores = [verdeCipreste, meiaNoite, azulInverno, estelar, rosaClaro]
//O mesmo para os tamanhos que vamos ter que alternar, declaramos com as duas opções. e para acessar elas, usamos indice 0 ou 1, quando for invocar.
const opcoesTamanho = ['41 mm', '45 mm'];

//Agora vamos pensar nas interatividades que vão ocorrer na pagina: Quando clicar nas cores, o relogio muda de cor e o texto em cima tambem. Quando clica no tamanho da caixa a imagem aumenta e diminui. E Quando clica nos botões para rotação ele mostra diferentes angulos. O JS que vai fazer essa interação.

//Vamos fazer a interação de quando clicar nas imagens de rotações diferentes, mudar a imagem exibida.

let Imagemselecionada = 1;

let tamanhoSelecionado = 1;

let corSelecionada = 1;

//Criamos uma função  e depois declaramos o tipo e uma variavel dentro das chaves atribuindo ao document.queryselector: e dentro do parenteses, buscamos oque queremos. Quer dizer assim: busque um elemento que tem essa informação name="opcao-imagem", logo ele botou todos que tinham esse name para invocar funcionalidades. 

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}

//Desse elemento eu so quero saber o id dele, e nisso guardamos no final do código, é uma variavel, o id do cara que ta marcado. E tudo bem, como o id não se repete, se eu conheco o id eu conheco o cara.

//Ontem buscamos o elementbyid ou byclass, hoje vamos usar o Queryselector que vai fazer essa ligação. Ele busca o campo que queremos referenciar isso.

//A variavel, vai alternar o checked toda vez que for selecionada outra imagem.


//Criar uma nova função para trocar os tamanhos da caixa e mudar informações da página e imagens que são alteradas quando selecionamos uma caixa de tamanho diferente.

//Eu quero selecionar um cara, que cara? um cara que tem um atributo name igual a "opcao-tamanho".

function trocarTamanho() {
    //Vamos atualizar nossa variavel do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //Mudar o tilulo do produto
    tituloProduto.innerText = 'Pulseira loop esportiva azul-inverno para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    //Mudar o tamanho da imagem invocando o uma class css
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}
//Funcionalidade de troca de cor
function trocarCor() {
    //atualizar cor selecionada, como não quero qualquer input desses do opcao-cor, eu quero oque tem o checked, então eu boto o :checked. Eu quero o cara inteiro? Não, preciso so do id dele.
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    //Oque eu quero fazer com esse id? Atualizar a imagem com base no id do cara que foi selecionado.
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo da pagina
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    //trocar nome da cor
    nomeCor.innerText = 'Cor - ' + opcoesCores [corSelecionada].nome;
    //trocar imagens das miniaturas exibidas
     miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
     miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
     miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
    //trocar imagem de visualização
    trocarImagem();
}


