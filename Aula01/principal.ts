let nome: string = "Alexsandro"
let idade: number = 34

console.log(nome, idade);

$("<p>", { text: `Olá ${nome} você tem ${idade} anos.` }).appendTo('body')

function teste ():number{

    return 5
}

function dados (nome:string, idade:number):boolean {

    if(nome == "Alex" && idade == 24){
        return true;
    }else{
        return false;
    }

}

// No typescript uma função tem que retornar a variável do tipo declarada, obedecendo a regra declarada depois do parâmetro.
function somar (numA:number,numB:number):number{
    return numA + numB
}