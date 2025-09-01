/*if(Chuva) {
    let Chuva = prompt ("Se estiver chovendo levar guarda-chuva") ; 
}
else if (Sol) {
    let climaSol = "Usar óculos de sol"
alert (climaSol); 
console.log(climaSol); } */


/*let numero = prompt("10:");

numero = Number(numero);
if (numero > 10) {
    console.log("O número é maior que dez.");
} else if (numero < 10) {
    console.log("O número é menor que dez.");
} else if (numero === 10 ) {
    console.log("O número é dez.");
} else {
    console.log("Entrada inválida.");
}
*/ 

/*let idade = prompt ("Qual a sua idade?");

  if (idade < 12) {
 console.log ("Você é uma criança");
 } else if (idade >= 12 && idade < 18) {
    console.log ("Você é um adolescente");
 } else {
    console.log ("Você é um adulto.");
 } */

  /*  let notaEscolar = prompt ("Qual sua nota escolar?");
   if (notaEscolar >= 10) {
    console.log("Aprovado");
} else if (notaEscolar < 10 && notaEscolar >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
} */

/*let valorCompra = prompt("Digite o valor da compra:");
valorCompra = Number(valorCompra);

if (isNaN(valorCompra) || valorCompra <= 0) {
    console.log("Valor inválido. Digite um número positivo.");
} else if (valorCompra <= 100) {
    console.log("Valor da compra: R$ " + valorCompra.toFixed(2) + ". Sem desconto.");
} else if (valorCompra <= 500) {
    let valorComDesconto = valorCompra * 0.9; // 10% de desconto
    console.log("Valor original: R$ " + valorCompra.toFixed(2));
    console.log("Valor com 10% de desconto: R$ " + valorComDesconto.toFixed(2));
} else {
    let valorComDesconto = valorCompra * 0.8; // 20% de desconto
    console.log("Valor original: R$ " + valorCompra.toFixed(2));
    console.log("Valor com 20% de desconto: R$ " + valorComDesconto.toFixed(2));
} */


/*let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");


if (num1 > num2) {
  alert("O maior número é: " + num1);
  console.log ("O maior número é: " + num1);
} else if (num2 > num1) {
  alert("O maior número é: " + num2);
  console.log ("O maior número é: " + num2);
} else {
  alert("Os dois números são iguais.");
  console.log("Os dois números são iguais.");
} */

/*let categoria = prompt("Digite a categoria do produto (alimento, bebida, eletronico):").toLowerCase().trim();

if (categoria === "alimento") {
    alert("Você escolheu comida");
    console.log("Você escolheu comida");
} else if (categoria === "bebida") {
    alert("Você escolheu bebida");
    console.log("Você escolheu bebida");        
} else if (categoria === "eletronico") {
    alert("Você escolheu tecnologia");
    console.log("Você escolheu tecnologia");    
} else {
    alert("Categoria inválida");
    console.log("Categoria inválida");  
} */

/*let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    console.log("Entrada inválida para peso ou altura.");
} else {
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else { // imc 30 ou mais
        classificacao = "Obesidade";
    }

    alert(`Seu IMC é ${imc}. Classificação: ${classificacao}.`);
    console.log(`Peso: ${peso} kg, Altura: ${altura} m, IMC: ${imc}, Classificação: ${classificacao}`);

} */

    /*let usuario = prompt ("Digite seu nome de usuário:")
    let senha = prompt ("Digite sua senha:")
    if (usuario === "admin" && senha === "1234") {
        alert("Acesso Permitido");
         console.log("Acesso Permitido");
    } else {
        alert("Acesso Negado.");
        console.log("Acesso Negado.");
    } */ 

        

