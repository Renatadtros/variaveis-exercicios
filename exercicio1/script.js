//EXERCÍCIO 1
//PARTE 1: 
//parte a e b
let nome;
let idade;

// parte c
console.log(typeof nome);
console.log(typeof idade);

//parte e
nome = prompt ("Qual é seu nome?")
idade = Number(prompt("Qual é a sua idade?"));

//parte f
console.log(typeof nome); // "string"
console.log(typeof idade); // "number"
//// Agora que as variáveis receberam um valor, o tipo é definido conforme o tipo de dado armazenado.

//parte g
console.log("Olá, " + nome + ", você tem " + idade + " anos.");


//PARTE 2:

let respostaA = prompt("Você gosta de chocolate? (sim ou não)");
let respostaB = prompt("Você tem filhos? (sim ou não)");
let respostaC = prompt("Você pratica algum esporte? (sim ou não)");

console.log("Respostas:");
console.log("Gosta de chocolate: " + respostaA);
console.log("Você tem filhos: " + respostaB);
console.log("Pratica algum esporte: " + respostaC);

