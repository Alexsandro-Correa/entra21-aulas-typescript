export class Vendedor{

    public nome:string
    public idade:number
    public comissao:number
    public valorVenda:number
    public vendasRealizadas:number
    
    constructor(nome:string,idade:number,comissao:number,vendasRealizadas:number){
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas
    }

    public apresentar():string{

        return `Olá, eu me chamo ${this.nome} e estou vendendo produtos Ivone`

    }


    public calcularRendimento():string{

        let lucro = (this.vendasRealizadas * this.valorVenda) / this.comissao

        return `Esse mês eu lucrei ${lucro} reais com vendas`
    }

}