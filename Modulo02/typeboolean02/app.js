"use strict";
// vamos simular uma regra de uma escola a onde um aluno tem que somar as 8 notas.
// e somar todas elas e fazer a media 
// para ser aprovado na media o aluno tem que tirar a media acima de 7 pontos
// se caso ele fique com a media  a cima de 7 ele vai receber uma mensagem de aprovado
// se caso ele fique com a media acima de 5.5 e nemor que 7 ele vai receber uma mensagem de que está de recuperação
// se caso ele fique com a nota abaixo de 4 ele vai receber  uma mensagem de reprovado direto
function somarNotas() {
    let nota01 = 9;
    let nota02 = 6;
    let nota03 = 3.8;
    let nota04 = 8.7;
    let nota05 = 7;
    let nota06 = 9;
    let nota07 = 5;
    let nota08 = 4;
    let somaNotas = nota01 + nota02 + nota03 + nota04 + nota05 + nota06 + nota07 + nota08;
    console.log(somaNotas);
}
// função so pra fazer a media
