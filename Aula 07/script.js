
/*
let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
} */


/*let contador = 10;
while (contador >= 0) {
    if (contador === 0) {
        console.log("Feliz Ano Novo!");
    } else {
        console.log(contador);
    }
    contador--; 
} */

/*let senha; 
do {
    senha = prompt("Digite a senha:");

    if (senha !== "1234") {
        console.log("Senha incorreta. Tente novamente.");
    }
} while (senha !== "1234");
console.log("Senha correta!"); */

// Declare uma variável global chamada saudacao com o valor "Olá".
function boasVindas(nome, titulo = null) {
  let saudacao = "Olá ";

  if (titulo) {
    console.log(saudacao + titulo + " " + nome);
  } else {
    console.log(saudacao + nome);
  }
}

// Testes
boasVindas("Valesca", "Dra"); 
boasVindas("Valesca");       




/*function boasVindas(nome, titulo) {
  if (titulo) {
    return `Olá ${titulo} ${nome}`;
  } else {
    return `Olá ${nome}`;
  }
}


console.log(boasVindas("Maria", "Dra")); 
console.log(boasVindas("Maria"));       







/* function mostrarMensagem() {
  let mensagem = "Estou gostando muito do curso!";
  console.log(mensagem);
}
mostrarMensagem(); */



/*let frutas = ['Maça', 'Banana', 'Pera', 'Morango']
frutas[3]= 'Morango'
frutas[4]= 'Manga'
console.log(frutas); */

/*let almoco = ["feijao", "arroz", "carne", "pure de batata"];
//almoco.unshift("salada")
//almoco.pop([1])
//almoco.push("Salada")
//almoco.shift()
//almoco.sort()
console.log(almoco);*/

/*let listaCompras = ["frutas", "carnes", "produtos de higiene"]
for(i = 0; i < listaCompras.length; i++ )
console.log("- " + listaCompras[i])*/

