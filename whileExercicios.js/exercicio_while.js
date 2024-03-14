//exercicio 01
//import entradadeDados from 'readline-sync';

//let num = entradadeDados.questionInt("informe um numero da tabuada");
//let cont = 0;


//while (cont <= 10) {
   // let resultado = num * cont;
   // console.log ('${num}x ${cont} = ${resultado}');
    //cont++;
//}

//exercicio 02
import entradadeDados  from "readline-sync" ;

let numAlunos = entradadeDados.question.questionInt("quantidade de alunos na turma:");
let cont = 1;
let notaTotal = 0;

while (cont <= numAlunos){
    let nota1 = entradadeDados.questionFloat("Nota do primeiro bimestre: ");
    let nota2 = entradadeDados.questionFloat("Nota do segundo bimestre: ");
    let nota3 = entradadeDados.questionFloat("Nota do terceiro bimestre: ");
    let nota4 = entradadeDados.questionFloat("Nota do quarto bimestre: ");

    console.log("A media media desse aluno e: $(notaAluno)")
    notaTotal += notaAluno;
    cont++;  
}

let media = notaTotal / numAlunos;
console.log('media da sala: ${media}');



