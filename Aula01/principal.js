let nome = "Alexsandro";
let idade = 34;
console.log(nome, idade);
$("<p>", { text: `Olá ${nome} você tem ${idade} anos.` }).appendTo('body');
function teste() {
    return 5;
}
function dados(nome, idade) {
    if (nome == "Alex" && idade == 24) {
        return true;
    }
    else {
        return false;
    }
}
// No typescript uma função tem que retornar a variável do tipo declarada, obedecendo a regra declarada depois do parâmetro.
function somar(numA, numB) {
    return numA + numB;
}
