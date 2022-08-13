import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";
import { Professor } from "./Professor.js";
import { Vendedor } from "./Vendedor.js";

console.log("Aula 02 funcionou...");

let animal1: Animal = new Animal("Drozófila Melanogasta", "Mosca", 0.5, ["Ar", "Lixo", "Comida"])

console.log("Antes...");

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);


animal1.nome = "Girafa"
animal1.peso = 150.70
animal1.habitat[0] = "Safari"
animal1.setEspecie = "Girafarigs Totalis"

console.log("Depois...");

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

let animal2 =  new Animal("Zebrelis Listradis","Zebra", 80, ["Safari", "Floresta"])

console.log("Animal 2 Antes...");


console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

console.log("Animal 2 Depois...");

animal2.nome = "Rhinoceronte"
animal2.peso = 300.80
animal2.habitat = ["Madagascar", "Savanas"]
animal2.setEspecie = "Rhinos Estrapidilus"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat);
console.log(animal2.getEspecie);

let aluno1:Aluno = new Aluno("Alexsandro", 24 , [10,9,8])

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.apresentar());
console.log("Minha média foi " + aluno1.calcularMedia());

let aluno2:Aluno = new Aluno("Maria", 31, [5,8,9])

console.log(aluno2);
console.log(aluno2.nome);
console.log(aluno2.idade);
console.log(aluno2.apresentar());
console.log("Minha média foi " + aluno2.calcularMedia());

let prof1:Professor = new Professor("Oliota", 33, ["Java", "Angular", "HTML e CSS"])

prof1.setValor = 10
prof1.quantidadeHoras = 4

console.log(prof1.nome);
console.log(prof1.idade);
console.log(prof1.disciplina);
console.log(prof1.apresentar());
console.log(prof1.calcularRendimento());

let prof2:Professor = new Professor("Isabelle", 28, ["Inglês"])

prof2.setValor = 7
prof2.quantidadeHoras = 4

console.log(prof2.nome);
console.log(prof2.idade);
console.log(prof2.disciplina);
console.log(prof2.apresentar());
console.log(prof2.calcularRendimento());

let vendedor1:Vendedor = new Vendedor("Cláudio", 35, 3.5, 10)

vendedor1.valorVenda = 200

console.log(vendedor1.nome);
console.log(vendedor1.idade);
console.log(vendedor1.comissao);
console.log(vendedor1.apresentar());
console.log(vendedor1.calcularRendimento());