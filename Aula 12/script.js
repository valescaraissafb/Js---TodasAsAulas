//1. Crie uma função calculadora(a, b, operador) que receba dois números e uma string representando 
// o operador (+, -, *, /). Retorne o resultado da operação. 
/*function calculadora(a, b, operador) {
    let operacoes = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => y !== 0 ? x / y : "Erro: divisão por zero"
    };

    return operacoes[operador] ? operacoes[operador](a, b) : "Operador inválido";
}
console.log(calculadora(10, 5, '+')); 
console.log(calculadora(10, 0, '/')); 
console.log(calculadora(10, 5, '^')); */

//2. Crie uma função que receba um array de números e retorne: a soma dos elementos, a média,
// o maior e o menor número. 
/*function analisarArray(numeros) {
  let soma = 0;
  let maior = numeros[0];
  let menor = numeros[0];
   for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] > maior) maior = numeros[i];
    if (numeros[i] < menor) menor = numeros[i];
  }
  
  let media = soma / numeros.length;
  
  return { soma, media, maior, menor };
}
let array = [10, 5, 8, 20, 3];
console.log(analisarArray(array));*/

//3. Crie um array com várias idades.
/*let idades = [14, 15, 16, 17, 18, 22, 25, 31];
//Separe em dois novos arrays: maioresDeIdade e menoresDeIdade.
let maioresDeIdade = idades.filter(idade => idade >= 18);
let menoresDeIdade = idades.filter(idade => idade < 18);
//Mostre ambos no console.
console.log("Maiores de idade:", maioresDeIdade);
console.log("Menores de idade:", menoresDeIdade); */

//4. Crie um objeto carro com propriedades: marca, modelo, ano,velocidade.
//Adicione um método acelerar que aumenta a velocidade em 10.
//Adicione um método frear que diminui a velocidade em 10.
/* let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2019,
    velocidade: 120,

    acelerar() {
        this.velocidade += 10;
    },

    frear() {
        this.velocidade -= 10;
    }
};

carro.acelerar();
console.log(`Velocidade acelerada para ${carro.velocidade} km/h`);
carro.frear();
console.log(`Velocidade reduzida para ${carro.velocidade} km/h`);
console.log(carro); */

// 5. Crie um array chamado estoque, onde cada item é um objeto com: produto, quantidade, preco.
// Crie uma função que calcule o valor total do estoque.
// Crie outra função que permita vender um produto (diminuindo sua quantidade).
/*let estoque = [
    {Produto:"Blusa", quantidade: 50, preco: 25},
    {Produto:"Short", quantidade: 35, preco: 40},
    {Produto:"Sapato", quantidade: 15, preco: 120},
    {Produto:"Boné", quantidade: 22, preco: 15 },
]; 
 console.log(estoque);

function calcularValorTotal(estoque) {
    let total = 0;
    for (let item of estoque) {
        total += item.quantidade * item.preco;
    }
    return total;
}
console.log("O valor total do estoque é:", calcularValorTotal(estoque)); 
 
function venderProduto(estoque, nomeProduto, quantidadeVendida) {
  const produto = estoque.find(item => item.Produto === nomeProduto);
  if (!produto) {
    console.log("Produto não encontrado.");
    return false;
  }
  if (produto.quantidade < quantidadeVendida) {
    console.log("Quantidade insuficiente no estoque.");
    return false;
  }
  produto.quantidade -= quantidadeVendida;
  console.log("Venda realizada. Estoque atualizado:");
 return true;
}
venderProduto(estoque, "Blusa", 10);
console.log("Valor total do estoque: R$", calcularValorTotal(estoque));
console.log(estoque);*/

//6. Crie uma função que receba uma string e conte quantas vogais existem nela.
/*function contarVogais(texto) {
  let vogais = 'aeiouAEIOU';
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}
console.log("A quantidade de vogais existente na frase -> Estou gostando do curso! é : ", contarVogais("Estou GOstAndo DO curSo")); 
 */

//7. Crie uma função verificarSenha(senha) que:
//Retorne "Senha forte" se tiver mais de 8 caracteres, incluir pelo menos um número e uma letra maiúscula.
/*function verificarSenha(senha) {
  // Verifica se a senha tem mais de 8 caracteres
  let tamanhoValido = senha.length > 8;
  let contemNumero = /\d/.test(senha);
  let contemMaiuscula = /[A-Z]/.test(senha);

 if (tamanhoValido && contemNumero && contemMaiuscula) {
    return "Senha forte";
  } else {
    return "Senha fraca";
  }
}
 let senhaUsuario = prompt("Digite sua senha:");
 alert(verificarSenha(senhaUsuario));*/

 //8. Usando o método map, crie um novo array que dobre os números de um array original.
 /*let numeros = [1, 2, 3, 4, 5];

let numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(numerosDobrados);*/


//9. Usando o método filter, crie um novo array apenas com números pares.
/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); */ 

//11. Crie um sistema de carrinho de compras:
// Cada item do carrinho é um objeto com nome, preco, quantidade.
// Crie funções para: adicionar itens, remover itens, calcular o valor total do carrinho,
//listar os itens no console.

let carrinho = [
    {nome: "Biscoito", preco: 2, quantidade: 10},
    {nome: "Pipoca", preco: 1, quantidade: 12},
    {nome: "Salgadinho", preco: 3, quantidade: 14},
];

function adicionarItem(nome, preco, quantidade) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({nome, preco, quantidade});
    }
}

function removerItem(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
}

function calcularTotal() {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

function listarItens() {
    console.log("Itens no carrinho:");
    carrinho.forEach(item => {
        console.log(`- ${item.nome}: R$${item.preco} x ${item.quantidade}`);
    });
}


function verificarProduto(nomeProduto) {
    const produto = carrinho.find(item => item.nome.toLowerCase() === nomeProduto.toLowerCase());
    if (produto) {
        return `Produto encontrado: ${produto.nome}, Preço: R$${produto.preco}, Quantidade: ${produto.quantidade}`;
    } else {
        return "Produto não existente no carrinho";
    }
}


listarItens();
adicionarItem("Chocolate", 5, 3);
listarItens();
console.log("Total:", calcularTotal());
removerItem("Pipoca");
listarItens();
console.log("Total:", calcularTotal());


let verificarProdutoExistente = prompt("Digite o produto que deseja:");
alert(verificarProduto(verificarProdutoExistente));

