export class Professor {
    constructor(nome, idade, disciplina) {
        this.nome = nome;
        this.idade = idade;
        this.disciplina = disciplina;
    }
    apresentar() {
        return `Olá, eu sou o(a) professor(a) ${this.nome} e dou aula de ${this.disciplina}`;
    }
    calcularRendimento() {
        let total = (this.valorHora * this.quantidadeHoras) * 30;
        return `Meu rendimento é de ${total} reais.`;
    }
    get getValor() {
        return this.valorHora;
    }
    set setValor(valorHora) {
        this.valorHora = valorHora;
    }
}
