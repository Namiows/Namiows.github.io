
let peca = "cavalo";

switch (peca) {
    case "Peao":
        console.log("O Peão anda para frente e come em diagonal.");
        break
    case "Cavalo":
        console.log("O CAVALO anda em L e come a peça da ultima casa");
        break
    case "Torre":
        console.log("A Torre anda somente horizontal e vertical.");
        break
    case "Bispo":
        console.log("O Bispo anda em diagonal.");
        break
    case "Dama":
        console.log("A Dama anda em qualquer direção, quantas casas for necessário.");
        break
    case "Rei":
        console.log("O Rei anda em qualquer direção, porém somente uma casa.");
        break
    case "":
    default:
        console.log("Deve ser uma peça de outro jogo.")
}

