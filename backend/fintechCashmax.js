function Conta(agencia, conta, saldo) {
        this.agencia = agencia,
            this.conta = conta,
            this.saldo = saldo
    }

    Conta.prototype.sacar = function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para esse valor!");
            this.verSaldo()
            return
        }

        this.saldo -= valor
        this.verSaldo()
    }
    Conta.prototype.depositar = function(valor) {
        this.saldo += valor
        this.verSaldo()
    }
    Conta.prototype.verSaldo = function(valor) {
        console.log(`Ag/cc: ${this.agencia}/${this.conta} Saldo: ${this.saldo}`)
    }


function ContaCorrente(agencia, conta, saldo, limite) {
        Conta.call(this, agencia, conta, saldo);
        this.limite = limite;
}


function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log("Saldo insuficiente para esse valor!2");
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
};

const Corrente = new ContaCorrente(10, 1512, 0, 100)
Corrente.depositar(10)
Corrente.sacar(110)
Corrente.sacar(1)

const Poupanca = new ContaPoupanca(52, 5635, 100)
Poupanca.depositar(10)
Poupanca.sacar(10)
Poupanca.sacar(1)