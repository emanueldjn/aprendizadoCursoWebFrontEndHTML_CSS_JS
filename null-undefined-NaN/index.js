let mensagem = "Olá eu sou uma \"mensagem de texto\" ";
console.log(mensagem);


console.log(typeof 0); // number
console.log(typeof '0'); // string
console.log(typeof String(0)); // string

let isValid = true;
console.log(typeof isValid); // boolean


console.log(Boolean("0")) // true
console.log(Boolean(0))  // false
console.log(Boolean(undefined))  // false
console.log(Boolean(null))    // false
console.log(Boolean(NaN))      // false

let naoDeclarado
console.log(naoDeclarado);


let str = "Ba"
str += parseInt(str);
console.log(str + "a")