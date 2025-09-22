//1. Crie um objeto chamado celular com as propriedades: marca,modelo e ligado (true ou false).
/*let celular = {
    marca: "Apple",
    modelo: "Xr",
    ligado: false,
}
// Altere o valor de ligado para true e mostre no console.
celular.ligado = true;

console.log(celular);*/

//2. Crie um objeto filme e adicione dinamicamente (depois de criado) a propriedade genero.
//Mostre o objeto no console com a nova propriedade.

/*let filme = {
  titulo: "Interstellar",
  diretor: "Christopher Nolan",
  ano: 2014
};
filme.genero = "Ficção científica";
console.log(filme);*/


//3. Crie um objeto produto com nome, preco e estoque.
/*let produto = {
    nome:"Camiseta",
    preco: 25,
    estoque: 10,
};
//Aumente o estoque em +10 e mostre o novo valor no console.
produto.estoque += 10;
console.log(produto);
console.log("Novo estoque:", produto.estoque);*/

//4. Crie um objeto lampada com a propriedade acesa (false porpadrão) e métodos ligar() e desligar() que mudam o valor da
//propriedade.
//Teste chamando os métodos.
/*let lampada = {
    acesa: false,
    ligar: function() {
        this.acesa = true;
        console.log(this.acesa);
    },
    desligar: function() {
        this.acesa = false;
        console.log(this.acesa);
    }
};
console.log("Estado inicial:", lampada.acesa); 
lampada.ligar();   
console.log("Está acesa?", lampada.acesa); 
lampada.desligar(); */

//5. Crie um objeto usuario com nome, senha e um método login(senhaDigitada) que retorna 
// “Acesso permitido” se a senha for correta ou “Acesso negado” caso contrário.
/*let usuario = {
  nome: "João",
  senha: "1234",

  login: function(senhaDigitada) {
    if (senhaDigitada === this.senha) {
      return "Acesso permitido";
    } else {
      return "Acesso negado";
    }
  }
};

console.log(usuario.login("1234")); 
console.log(usuario.login("senhaErrada"));

let usuario = {
  nome: "João",
  senha: "1234",

  login: function(senhaDigitada) {
    if (senhaDigitada === this.senha) {
      return "Acesso permitido";
    } else {
      return "Acesso negado";
    }
  }
};

// Pedindo a senha ao usuário
let senhaInformada = prompt("Digite sua senha:");

// Chamando o método login com a senha digitada
let resultado = usuario.login(senhaInformada);

// Mostrando o resultado no console
console.log(resultado); */


//6. Crie um objeto aluno que tenha as propriedades nome e endereco, onde endereco também é um 
// objeto com rua, numero e cidade.
// Mostre no console: “O aluno [nome] mora na rua [rua], no [numero], em [cidade]”.
/*let aluno = {
  nome: "Nicolly",
  endereco: {
    rua: "Rua Félix Cavalcanti de Albuquerque",
    numero: 121,
    cidade: "Recife"
  }
};

console.log(`A aluna ${aluno.nome} , mora na rua ${aluno.endereco.rua}, no ${aluno.endereco.numero}, 
em ${aluno.endereco.cidade}.`); */

//7. Crie um objeto pedido que contenha: cliente (objeto com nome e telefone) e 
// itens (array de strings).
//Mostre no console o nome do cliente e o primeiro item do pedido.
/*let pedido = {
  cliente: {
    nome: "Labelly",
    telefone: "(81) 99199-8930"
  },
  itens: ["Pizza", "Refrigerante", "Sobremesa"]
};

console.log(`Cliente: ${pedido.cliente.nome}`);
console.log(`Primeiro item do pedido: ${pedido.itens[0]}`);*/

//Como manipular dados de forma fácil dentro de uma lista em objeto
/*const alunos = [
  {nome:"Ana", idade: 20},
  {nome:"Carlos", idade:17},
  {nome:"Bianca", idade: 22},
  {nome:"Diego", idade: 16}
];
alunos.forEach(aluno => {
  console.log(aluno.nome,",",aluno.idade);
});

//map -> transformar a lista
const nomes = alunos.map(aluno=> aluno.nome);
console.log(nomes); 
const idade = alunos.map(aluno=> aluno.idade);
console.log(idade); 

//Filter ->filtrar por condição
//quem pode entrar em uma festa +18
/*const maiores = alunos.filter(aluno=>aluno.idade >= 18);
console.log(maiores);
//Quem não pode entrar na festa +18
const menores = alunos.filter(aluno=>aluno.idade < 18);
console.log(menores);

//Find -> Encontrar um especifico 
const alunoCarlos = alunos.find(aluno => aluno.nome === "Carlos");
console.log(alunoCarlos);

//Encontrar aluno que tenha 22 anos
const alunoIdade = alunos.find(aluno => aluno.idade === 22);
console.log(alunoIdade);
//Encontrar aluna Ana
const alunoAna = alunos.find(aluno => aluno.nome === "Ana");
console.log(alunoAna); */


//Usar forEach para mostrar todos os titulos no console.
/*const livros = [
  { titulo: "Dom Casmurro", preco: 25 },
  { titulo: "O Hobbit", preco: 45 },
  { titulo: "1984", preco: 30 },
  { titulo: "Harry Potter", preco: 60 }
];

livros.forEach(livro => {
  console.log(livro.titulo);
});

//Usar map para criar uma lista só com os preços.
const precos = livros.map(livro => livro.preco);
console.log(precos);

//Usar filter para pegar apenas livros com preço menor que 40.
const livrosPrecoMenor = livros.filter(livro => livro.preco < 40);
console.log(livrosPrecoMenor);

//Usar find para procurar um livro pelo titulo.
const livroProcurado = livros.find(livro => livro.titulo === "Harry Potter");
console.log(livroProcurado);*/


//Crie um objeto biblioteca com:
//propriedade livros(array de objetos com titulo e disponivel)
const biblioteca = {
  livros: [
    { titulo: "Querido John", disponivel: true },
    { titulo: "O direito de ser feliz", disponivel: true },
    { titulo: "Harry Potter e o enigma do princípe", disponivel: false }
  ],
//metodo emprestar(titulo)-> se o livro estiver disponivel, muda para false e mostra "livro emprestado".
  emprestar(titulo) {
    const livro = this.livros.find(livro => livro.titulo === titulo);
    if (!livro) {
      console.log("Livro não encontrado.");
    } else if (!livro.disponivel) {
      console.log("Livro indisponível para empréstimo.");
    } else {
      livro.disponivel = false;
      console.log("Livro emprestado.");
    }
  },
//metodo devolver(titulo)-> muda para true e mostra "livro devolvido".
  devolver(titulo) {
    const livro = this.livros.find(livro => livro.titulo === titulo);
    if (!livro) {
      console.log("Livro não encontrado.");
    } else {
      livro.disponivel = true;
      console.log("Livro devolvido.");
    }
  },
//metodo listarDisponiveis()->mostra todos os livros com disponivel: true. 
listarDisponiveis() {
        const disponiveis = this.livros.filter(livro => livro.disponivel);
    console.log("Livros disponíveis:");
    disponiveis.forEach(livro => console.log("- " + livro.titulo));
  }
};
 
// Testes com pelo menos 3 livros
console.log(biblioteca.livros);

/*biblioteca.listarDisponiveis();

biblioteca.emprestar("Querido John");
biblioteca.listarDisponiveis();

biblioteca.emprestar("Querido John");
biblioteca.devolver("Querido John");
biblioteca.listarDisponiveis();*/

console.log(">>> Listando livros disponíveis inicialmente:");
biblioteca.listarDisponiveis();

console.log("\n>>> Tentando emprestar 'Querido John':");
biblioteca.emprestar("Querido John");

console.log("\n>>> Tentando emprestar 'Harry Potter e o enigma do princípe':");
biblioteca.emprestar("Harry Potter e o enigma do princípe");

console.log("\n>>> Listando livros disponíveis após empréstimos:");
biblioteca.listarDisponiveis();

console.log("\n>>> Devolvendo 'Harry Potter e o enigma do princípe':");
biblioteca.devolver("Harry Potter e o enigma do princípe");

console.log("\n>>> Listando livros disponíveis após devolução:");
biblioteca.listarDisponiveis();




