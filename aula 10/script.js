//1. Crie variáveis para armazenar nome, idade, email e estudando (boolean). 
/*let nome = "Valesca";
let idade = 27;
let email = "valescaraissafb@gmail.com";
let estudando = true;


//2. Mostre uma frase no console usando template string, como:  
// "Meu nome é João, tenho 20 anos, meu e-mail é joao@email.com e estou estudando: true". 
console.log(`Meu nome é ${nome}, tenho ${idade} anos, meu e-mail é ${email} e estou estudando: ${estudando}.`); 

//3. Descubra e mostre no console o tipo de cada variável usando typeof. 
console.log(`Tipo de nome: ${typeof nome}`);
console.log(`Tipo de idade: ${typeof idade}`);
console.log(`Tipo de email: ${typeof email}`);
console.log(`Tipo de estudando: ${typeof estudando}`);*/


//1. Peça duas variáveis: precoUnitario e quantidade. 
/*let precoUnitario = 100
let quantidade = 8
//2. Calcule o total da compra.
let total = precoUnitario * quantidade;
console.log("O total da compra é", total);

//3. Se o valor ultrapassar 100, aplique um desconto de 10%. 
if (total > 100) {
  let desconto = total * 0.10;
  let totalComDesconto = total - desconto;
  console.log("O total com desconto é", totalComDesconto);
} else {
  console.log("Não há desconto. O total permanece", total);
}
// 4. Verifique se a quantidade comprada é par e se está entre 5 e 20 (inclusive). 
let quantidadePar = (quantidade % 2 === 0);
let quantidadeNoIntervalo = (quantidade >= 5 && quantidade <= 20);

console.log("Quantidade par?", quantidadePar);
console.log("Quantidade entre 5 e 20?", quantidadeNoIntervalo);

if (quantidadePar && quantidadeNoIntervalo) {
  console.log("A quantidade é par e está entre 5 e 20.");
} else {
  console.log("A quantidade não atende aos critérios.");
} */


//1. Receba um número inteiro. 
/*let numero = 4
//2. Use um laço for para imprimir sua tabuada (1 a 10). 
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
//3. Depois, refaça a tabuada usando while.
let i = 1;

while (i <= 10) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
}*/


//1. Crie um array compras com pelo menos 5 itens (strings). 
/*let compras = ["Gloss","Blush","Base","Rímel","Iluminador"]*/
//2. Imprima todos os itens numerados (1. Arroz, 2. Feijão...). 
/*for (let i = 0; i < compras.length; i++) {
  console.log(`${i + 1}. ${compras[i]}`);
}*/
//3. Crie uma função imprimirRelatorio(lista) que não retorna nada (só imprime no console). 
/*function imprimirRelatorio(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
} */

//4. Teste passando o array compras para a função.

/*imprimirRelatorio(compras);*/


//1. Crie uma função calcularMedia(a, b, c = 0) que retorne a média de dois ou três números. 
/*function calcularMedia(a, b, c = 0) {
  if (c === 0) {
    return (a + b) / 2;
  } else {
    return (a + b + c) / 3;
  }
}
//2. Teste a função com dois valores e depois com três. 

// Teste com dois valores
console.log(calcularMedia(10, 20));   
// Teste com três valores
console.log(calcularMedia(10, 20, 30)); */

//3. Crie outra função resultadoFinal(nota) que: 
//○ retorna "Aprovado" se nota ≥ 60 
//○ retorna "Recuperação" se 40 ≤ nota < 60 
//○ retorna "Reprovado" se nota < 40
/*function resultadoFinal(nota) {
  if (nota >= 60) {
    return "Aprovado";
  } else if (nota >= 40 && nota < 60) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
} 
console.log(resultadoFinal(75)); 
console.log(resultadoFinal(50)); 
console.log(resultadoFinal(30)); */

//1. Crie um objeto aluno com propriedades: nome, idade, curso e um método apresentar() que retorne uma string. 
/*let aluno = {
    nome: "Raissa",
    idade: 27,
    curso: "JavaScript",
    apresentar () {
return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e curso ${this.curso}.`;
    }
};
//2. No console, execute aluno.apresentar(). 
console.log(aluno.apresentar());
//3. Adicione dinamicamente uma nova propriedade nota e mostre no console.
aluno.nota = 9
console.log(aluno);*/

//1. Crie um array carrinho com pelo menos 3 objetos representando produtos, cada um com: ○ nome, preco, quantidade 
/*let carrinho = [
  { nome: "Vestido", preco: 40, quantidade: 2 },
  { nome: "Salto", preco: 120, quantidade: 1 },
  { nome: "Bolsa", preco: 60, quantidade: 3 }
];

//2. Escreva uma função totalCarrinho(itens) que calcule e retorne o valor total. 
function totalCarrinho(itens) {
  return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

//3. Escreva outra função filtrarCaros(itens) que retorne apenas os produtos com preço acima de 50. 
function filtrarCaros(itens) {
  return itens.filter(item => item.preco > 50);
}

//4. No final, mostre no console: Lista completa / Total do carrinho / Produtos filtrados
console.log("Lista completa:", carrinho);
console.log("Total do carrinho:", totalCarrinho(carrinho));
console.log("Produtos filtrados (preço > 50):", filtrarCaros(carrinho)); */

//Você deverá criar um programa em JavaScript que simule um sistema simples de cadastro de alunos. 
//Esse sistema deve permitir: 
//1. Cadastrar alunos (nome, idade, curso e nota). 
//2. Listar alunos já cadastrados. 
//3. Calcular a média das notas de todos os alunos. 
//4. Mostrar situação final (Aprovado, Recuperação, Reprovado). 
// **Regras do desafio 
//1. Variáveis e tipos: use let e const para armazenar informações como lista de alunos e dados individuais. 
//2. Operadores: utilize operadores aritméticos para calcular médias e lógicos para validar condições. 
//3. Condições: 
//○ Nota ≥ 60 → "Aprovado" 
//○ 40 ≤ nota < 60 → "Recuperação" 
//○ Nota < 40 → "Reprovado" 
//4. Laço de repetição: use for ou for...of para percorrer a lista de alunos. 
//5. Funções: /Uma função cadastrarAluno(nome, idade, curso, nota) que retorne um objeto aluno. 
// Uma função listarAlunos(lista) que não retorne nada (só imprime). 
// Uma função calcularMedia(lista) que retorne a média das notas. 
//6. Objetos: cada aluno deve ser representado como um objeto com propriedades: 
//nome, idade, curso, nota, apresentar() (método que retorna uma string com apresentação). 
//Tem um Extra: 
// Permitir cadastrar vários alunos e armazenar em um array de objetos. 
// Criar uma função filtrarAprovados(lista) que retorne apenas os alunos com situação "Aprovado".

// Array para armazenar os alunos cadastrados
/*const listaAlunos = [];

// Função para cadastrar um aluno, retorna um objeto aluno
function cadastrarAluno(nome,idade,curso,nota) { 
// Criando o objeto aluno com propriedades e método apresentar
  const aluno = {
    nome,
    idade,
    curso,
    nota,
    apresentar() {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota: ${this.nota}`;
    },
    situacao() {
      if (this.nota >= 60) {
        return "Aprovado";
      } else if (this.nota >= 40) {
        return "Recuperação";
      } else {
        return "Reprovado";
      }
    }
  };
  return aluno;
}
// Função que lista alunos, imprimindo seus dados e situação final
function listarAlunos(lista) {
  for (const aluno of lista) {
    console.log(`${aluno.apresentar()} - Situação: ${aluno.situacao()}`);
  }
}
// Função que calcula a média das notas dos alunos
function calcularMedia(lista) {
  let soma = 0;
  for (const aluno of lista) {
    soma += aluno.nota;
  }
  return lista.length > 0 ? soma / lista.length : 0;
}
// Função extra que filtra e retorna alunos aprovados
function filtrarAprovados(lista) {
  const aprovados = [];
  for (const aluno of lista) {
    if (aluno.situacao() === "Aprovado") {
      aprovados.push(aluno);
    }
  }
  return aprovados;
}
// Cadastrando alunos
listaAlunos.push(cadastrarAluno("Eliz", 21, "Matemática", 70));
listaAlunos.push(cadastrarAluno("Labelly", 22, "História", 55));
listaAlunos.push(cadastrarAluno("Mariel", 20, "Física", 35));
listaAlunos.push(cadastrarAluno("Pedro", 19, "Filosofia", 75 ));
listaAlunos.push(cadastrarAluno("Maria", 25, "Inglês", 90));
listaAlunos.push(cadastrarAluno("Jessé", 18,"Biologia", 85))
// Listar todos os alunos
console.log ("* Lista de Alunos *");
listarAlunos(listaAlunos);

// Calcular e mostrar média
let media = calcularMedia(listaAlunos);
console.log(`\n* Média das notas: ${media.toFixed(2)}`)

// Filtrar e listar alunos aprovados
let alunosAprovados = filtrarAprovados(listaAlunos);
console.log("\n* Alunos Aprovados *");
listarAlunos(alunosAprovados); */


