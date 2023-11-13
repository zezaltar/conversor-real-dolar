var valorEmDolar = 4.92;
var valorEmReal = window.prompt("Qual o valor que voce quer saber em dolar?");
var valor = valorEmReal / valorEmDolar;
document.write(`O VALOR EM DÓLARES É: $${valor.toFixed(2)}`);