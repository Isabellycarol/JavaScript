import entradadeDados from 'readline-sync';

let dia = entradadeDados.questionInt("informe o dia da semana (de 1 a 7): ")

switch (dia) {
    case 1:
        console.log("segunda feira")
        break;
    case 2:
        console.log("terça feira")
        break;
    case 3:
        console.log("quarta feira")
        break;
    case 4:
        console.log("Quinta feira")
        break;
    case 5:
        console.log("sexta feira")
        break;
    case 6:
        console.log("sabado")
        break;
    case 7:
        console.log("domingo")
        break;
    default:
        console.log("Dia inexistente mundrungo")
        break;
}