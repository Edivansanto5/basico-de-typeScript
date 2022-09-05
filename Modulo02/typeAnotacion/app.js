"use strict";
// typeAnnotacion do tipo string
let nome;
nome = 'Anne da silva lemos';
console.log(nome);
//typeAnootacion do tipo Array
let animais = ['Macaco', 'Elefante', 'Sapo', 'Onça', 'Urso', 'Cobra', 'Panda'];
console.log(animais);
//typeAnnotacion do tipo objeto
let pessoa;
pessoa = { nome: 'Maria de ludes', idade: 33, sexo: 'Masculino', peso: 1.98 };
console.log(pessoa);
// criando outro objeto do tipo de carro
let carro;
console.log(' ');
carro = { nome: 'sedan', cor: 'preto', anoDeLancamento: 2022 };
console.log(carro);
// typeAnnotacion do tipo function 
function MediaNota(nota01, nota02, nota03, nota04) {
    let somaNotas = nota01 + nota02 + nota03 + nota04;
    let mediaNotas = somaNotas / 4;
    console.log(mediaNotas);
}
MediaNota(6, 7, 9, 5);
// 
