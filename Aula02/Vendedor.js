export class Vendedor {
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    apresentar() {
        return `Olá, eu me chamo ${this.nome} e estou vendendo produtos Ivone`;
    }
    calcularRendimento() {
        let lucro = (this.vendasRealizadas * this.valorVenda) / this.comissao;
        return `Esse mês eu lucrei ${lucro} reais com vendas`;
    }
}
