// typeAnnotacion do tipo string

let nome: string;
nome = 'Anne da silva lemos'

console.log(nome);

//typeAnootacion do tipo Array

let animais:string[ ] = ['Macaco','Elefante','Sapo','Onça','Urso','Cobra','Panda'];
console.log(animais);


//typeAnnotacion do tipo objeto
let pessoa:{
    nome:string;
    idade:number;
    sexo:string;
    peso:number
}

pessoa={nome:'Maria de ludes',idade:33,sexo:'Masculino',peso:1.98}
console.log(pessoa);

// criando outro objeto do tipo de carro

let carro:{
    nome:string;
    cor:string;
    anoDeLancamento:number
}
console.log(' ');

carro={nome:'sedan',cor:'preto',anoDeLancamento:2022}
console.log(carro);

// typeAnnotacion do tipo function 
function MediaNota(nota01:number,nota02:number,nota03:number,nota04:number){
    let somaNotas:number = nota01+ nota02+ nota03 + nota04;
    let mediaNotas:number = somaNotas/4;

    console.log(mediaNotas);
}
MediaNota(6,7,9,5)


// 
