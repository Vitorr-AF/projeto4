/* CRIE UM ALGORITIMO QUE LEIA UMA LISTA
E RETORNE DUAS NOVAS LISTAS, CONTENDO NUMEROS PARES E ÍMPARES
OBS. A LISTA DEVE CONTER NÚMEROS DE 1 A 9 
E USAR A ESTRUTURA DE REPETIÇÃO FOR*/

//DECLARANDO AS VARIÁVEIS

let listaNumeros=[1,2,3,4,5,6,7,8,9];
let pares=[];
let impares=[];


for(let numeros of listaNumeros){
    if(numeros % 2 == 0){
        pares.push(numeros);
    }else{
        impares.push(numeros);
    }
};
console.log(pares);
console.log(impares);

/* PROFESSOR DE KARATE MIYAGI-SAN TEM UMA LISTA DE ALUNOS(OBJETOS) QUE
CONTEM NOME, NOTA1 E NOTA2, POIS ELE PRECISA QUE REALIZE O CALCULO
DA MÉDIA DAS NOTAS, E MOSTRAR O NOME DO ALUNO E A MÉDIA DE CADA ALUNO*/

const listaKaratecas=[
    {nome: "Huguinho",notas:[5, 6]},
    {nome: "Zezinho",notas:[7, 8]},
    {nome: "Luizinho",notas:[4, 8]}
]
for (let alunos of listaKaratecas){
    let media = (alunos.notas[0] + alunos.notas[1]) / 2;
    //INTERPOLAÇÃO/STRINGS LITERAIS/TEMPLATES STRINGS
    console.log(`A média do aluno ${alunos.nome} é ${media}`)
}

/*VOCÊ FOI CONVIDADO PARA DESENVOLVER UM ALGORITIMO
PARA UM BINGO DE TERCEIRA IDADE, É PRECISO FAZER O 
SORTEIO COM 6 NÚMEROS ENTRE 1 E 60 DE FORMA ALEATÓRIA*/

let sorteio=[];

while(sorteio.length < 6){
    let numero = Math.ceil(Math.random()*60);
    if(numero){
        sorteio.push(numero);
    }
}
console.log(sorteio);

/*CRIE UM ALGORITIMO QUE GERE A PORCENTAGEM DE UM NÚMERO*/

function calcularPorcentagem(num, porcent){
    return (num/100)*porcent;
}
console.log(calcularPorcentagem(25, 80))