// Crie uma função que retorne um booleano indicando se um ao é bissexto
// um ano é bissexto se for divisivel por 4 e não for divisivel por 100, exceto se for divisivel por 400

function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

console.log(anoBissexto(2000))
console.log(anoBissexto(1800))
