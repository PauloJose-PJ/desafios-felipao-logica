let vit = prompt("Quantas vitorias ?");
let der = prompt("Quantas derrotas ?");
let result = vit - der;

function game(result) {
  do {
    if (vit <= -1) {
      return `Você não pode digitar número negativo`;
    }

    let trofeu = "";
    if (result < 10) {
      trofeu = `Ferro`;
      return `O Herói tem de saldo de ${result} Sua colocação é de: ${trofeu}`;
    } else if (result > 10 && result < 20) {
      trofeu = `Bronze`;
      return `O Herói tem de saldo de ${result} Sua colocação é de: ${trofeu}`;
    } else if (result > 20 && result < 50) {
      trofeu = `Prata`;
      return `O Herói tem de saldo de ${result} Sua colocação é de: ${trofeu}`;
    } else if (result > 50 && result < 80) {
      trofeu = `Ouro`;
      return `O Herói tem de saldo de ${result} Sua colocação é de: ${trofeu}`;
    } else if (result > 80 && result < 90) {
      trofeu = `Diamantes`;
      return `O Herói tem de saldo de ${result} Sua colocação é de: ${trofeu}`;
    } else if (result > 90 && result < 100) {
      trofeu = `Lendário`;
      return `O Herói tem de saldo de ${result} Sua colocação é de: ${trofeu}`;
    } else {
      trofeu = `Imortal`;
      return `O Herói tem de saldo de ${result} Sua colocação é de: ${trofeu}`;
    }
  } while (desejaCon == "N" )
}

let desejaCon = prompt("Deseja continuar? S/N");
console.log(game(result));


