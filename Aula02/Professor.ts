export class Professor{

    public nome:string
    public idade:number
    public disciplina:Array<string>
    private valorHora:number
    public quantidadeHoras:number


    constructor (nome:string, idade:number, disciplina:Array<string>){
        this.nome = nome
        this.idade = idade
        this.disciplina = disciplina
    }

     public apresentar ():string{

        return `Olá, eu sou o(a) professor(a) ${this.nome} e dou aula de ${this.disciplina}`

     }

    public calcularRendimento():string{

        let total = (this.valorHora * this.quantidadeHoras)*30

        return `Meu rendimento é de ${total} reais.`
    }

    public get getValor():number {
        return this.valorHora;
    }

    
    public set setValor(valorHora : number) {
        this.valorHora = valorHora
    }
    
    

}


