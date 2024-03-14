import entradadeDados from "readline-sync"

let num = entradadeDados.questionfloat('Digite um numero:')
let num_2 =entradadeDados.questionFloat('Digite o segundo nome:')
let operacao = entradadeDados.questionFloat('qual operacao deseja usa? (+,-,/,*):')

switch (operacao) {
    case "+":
    console.log('resultado:${num + num_2}')
    break;

    case "-":
    console.log('resultado:${num + num_2}')
    break;

    case"/":
    console.log('resultado:${num + num_2}')
    break;

    case "*":
        console.log('resultado:${num + num_2}')
        break;
    
    default:
        console.log('Digite um numero certo mundrungo')
    break;

}