import entradadeDados from 'readline-sync';

let mes = entradadeDados.questionInt("informe o mes do ano (de 1 a 12): ")

switch (mes) {
    case 1:
        console.log("janeiro")
        break;
    case 2:
        console.log("fevereiro")
        break;
    case 3:
        console.log("março")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("Junho")
        break;
    case 7:
        console.log("Julho")
        break;
    case 8:
        console.log("agosto")
        break;
    case 9:
        console.log("setembro")
        break;
    case 10:
        console.log("outubro")
        break;
    case 11:
        console.log("novembro")
        break;
    case 12:
        console.log("dezembro")
        break;
    default:
        console.log("mes inexistente mundrungo")
        break;
}