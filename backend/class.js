// Com class eu posso criar a quantidade de pessoa eu quero
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    fullName() {
        console.log(`O seu nome completo é ${this.nome} ${this.sobrenome}`)
    }

    quemFala() {
        console.log(`O ${this.nome} esta falando!`);
    }
}

const p1 = new Pessoa('Wilhem Wundt', 'Maxime')
const p2 = new Pessoa('Rubens Wundt', 'Maxime')
const p3 = new Pessoa('Jonas', 'Pierre')
const p4 = new Pessoa('Widelande', 'Francois')

console.log(p1.quemFala());
console.log(p2.quemFala());
console.log(p3.quemFala());
console.log(p4.quemFala());