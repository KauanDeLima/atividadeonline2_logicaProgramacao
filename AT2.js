// atividade online 2
// usei o readlineSync para ficar um pouco mais interativo



var readlineSync = require ('readline-sync');

let datames = readlineSync.question("Digite o mes do evento de 01 a 12: ")
    if (datames <= 03) {
            console.log("desculpe... mas data indisponivel.")
    }

    let datadia = readlineSync.question('Digite o dia do evento de 01 a 30: ')
    if (datadia <= 15 ) {
        console.log("desculpe... mas data indisponivel.")
    }
    let idade = readlineSync.question("informe sua idade: ")
    if (idade < 18) {
        console.log("idade não permitida, somete Maiores de 18.");
        
    }
    let quantidadepart = readlineSync.question ("informe a quantidade de participantes do evento: ")
    if (quantidadepart > 100) 
    console.log("limite exedido, capacidade maxima de 100 pessoas por evento."); {
        
    }

    console.log(
      ` 
           
        Mês: ${datames}
        Dia: ${datadia}
        Idade: ${idade}
        Quantidade de participantes: ${quantidadepart}
    ` )