/*//Crie uma função que receba dois números e retorne a soma deles.
function somarNumeros(a, b) {
  return a + b;
}
let resultado = somarNumeros(12, 8);
console.log("A soma dos dois números é =", resultado);

//Crie uma função que receba um número e retorne true se for par, ou false caso contrário
function ehPar(numero) {
  return numero % 2 === 0;
}
console.log("O número 8 é " , ehPar(8)); 
console.log("O número 11 é ", ehPar(11)); 

//Crie uma função que receba três notas e retorne a média delas.
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
let media = calcularMedia(10, 5,5, 8);
console.log("Média:", media); 

//Crie uma array chamando compras com pelo menos 5 itens. Use um for para imprimir todos os itens.
let compras = ['queijo', 'pão', 'leite', 'ovo', 'café'];
for (let i = 0; i < compras.length; i++) {
  console.log(compras[i]);
}

//Crie uma array de números e use for para somas todos os elementos.
let numeros = [2,7,15,35];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma total:", soma);

//Crie uma array de nomes e use um laço para mostrar todos em maiúscula.
let nomes = ["Eliz", "Labelly", "Mariel", "Pedro"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i].toUpperCase());
}

//Usando a função criada para verificar se um número é par, mostre apenas números pares de 1 a 20.
function ehPar(numero) {
  return numero % 2 === 0;
}
for (let i = 1; i <= 20; i++) {
  if (ehPar(i)) {
    console.log(i);
  }
}

//Peça para o usuário digitar um número(com prompt) e mostre a tabuada dele de 1 até 100. 
let numero = prompt("Digite um número:");
numero = Number(numero);
if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
} else {
  for (let i = 1; i <= 100; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
*/
