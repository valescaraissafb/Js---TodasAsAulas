//Criando um objeto!
/*let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Preto"
};
carro.portas = 4;
carro.cor = "Prata";
console.log(carro);
//console.log(carro.marca)
//console.log(carro["ano"])*/

/*let carro = {
    marca: "Honda",
    modelo: "Civic",
    ligar: function(){
        console.log("O carro está ligado!");
    }
};
 carro.ligar(); */

 //Objetos alinhados!
 /*let pessoa = {
    nome: "Ana",
    idade: 25,
    endereco: {
        rua: "Av. Brasil", 
        numero: 123
    }
 };
 console.log(pessoa.endereco.rua);*/

 /*let aluno = {
    nome: "Valesca",
    idade: 27,
    curso: "JavaScript",
    apresentar: function () {
        console.log("Olá, meu nome é Valesca e eu estudo JavaScript.");
    }
};

aluno.apresentar(); */

//Crie um objeto livro com as propriedade (titulo, autor, ano, disponivel (true ou false), e um metordo emprestar que altere disponivel para false).
/*let livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  ano: 1899,
  disponivel: true,
  
  emprestar: function() {
    if (livro.disponivel) {
      livro.disponivel = false;
      console.log("Livro emprestado com sucesso.");
    } else {
      console.log("Livro já está emprestado.");
    }
  }
};

// Teste do método
livro.emprestar(); 
console.log(livro.disponivel);  */

//Crie um objeto produto com as propriedades (nome, preco,estoque), e dois metodos(vender(qtd)-> diminui a quantidade do estoque), repor(qtd)-> aumenta a quantidade do estoque.
/*let produto = {
  nome: "Camiseta",
  preco: 49.90,
  estoque: 100,

  vender(qtd) {
    if (qtd <= 0) {
      console.log("Quantidade inválida para venda.");
    } else if (qtd > produto.estoque) {
      console.log("Estoque insuficiente para a venda.");
    } else {
      produto.estoque -= qtd;
      console.log(`Venda realizada. Estoque restante: ${produto.estoque}`);
    }
  },

  repor(qtd) {
    if (qtd <= 0) {
      console.log("Quantidade inválida para reposição.");
    } else {
      produto.estoque += qtd;
      console.log(`Reposição realizada. Novo estoque: ${produto.estoque}`);
    }
  }
};

produto.vender(10);  
produto.repor(20);   */

//Crie um onjeto contaBancaria com (titular, saldo) e metodos (depositar(valor)-> aumenta saldo, sacar(valor)-> diminui o saldo(se houver saldo suficiente).
let contaBancaria = {
  titular: "Raissa França",
  saldo: 1000,

  depositar(valor) {
    if (valor > 0) {
      contaBancaria.saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  },

  sacar(valor) {
    if (valor > contaBancaria.saldo) {
      console.log("Saldo insuficiente para saque.");
    } else if (valor <= 0) {
      console.log("Valor de saque inválido.");
    } else {
      contaBancaria.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
    }
  },

  exibirSaldo() {
    console.log(`Saldo atual: R$${contaBancaria.saldo}`);
  }
};
 contaBancaria.exibirSaldo();     
contaBancaria.depositar(500);    
contaBancaria.sacar(200);       
contaBancaria.exibirSaldo();    
