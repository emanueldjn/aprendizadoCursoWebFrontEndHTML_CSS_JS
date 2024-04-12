// Crie uma função chamada: calcular() que receba dois números e uma string com um dos seguintes valores: 
// +, -, *, ou /;
// retorne a soma, subtração multiplicação ou divisão dependendo o simbolo passado por parâmetro 


function calcular(n1, n2, simbolo) {
    switch(simbolo) {
        case "+":
            return n1 + n2
        case "-":
            return  n1 - n2
        case "*":
            return n1 * n2
        case "/":
            return  n1 / n2
        default:
            return "Erro! Operador Inválido."
    }
} 

console.log(calcular(5, 3, '+'))   // 8
console.log(calcular(10, 2, '-'))  //  8
console.log(calcular(4, 6, '*'))   // 24
console.log(calcular(9, 3, '/'))   // 3
console.log(calcular(7, 2, 'a'))   // Erro! Operador Inválido.