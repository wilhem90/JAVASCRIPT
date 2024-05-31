class HaitiNIN {
    static validar(nin) {
        nin = this._sanitizeNIN(nin);
        const regex = /^[0-9]{10}$/;
        if (!regex.test(nin)) {
            return false;
        }

        // Calcular o dígito verificador usando um algoritmo específico para o NIN do Haiti
        const soma = nin.slice(0, 9).split('').reduce((acc, curr, idx) => {
            return acc + parseInt(curr) * (9 - idx);
        }, 0);

        const digitoVerificador = 11 - (soma % 11);
        const digitoCalculado = (digitoVerificador === 10) ? 0 : digitoVerificador;

        return parseInt(nin[9]) === digitoCalculado;
    }

    static gerar() {
        let nin = '';
        for (let i = 0; i < 9; i++) {
            nin += Math.floor(Math.random() * 10);
        }

        const soma = nin.split('').reduce((acc, curr, idx) => {
            return acc + parseInt(curr) * (9 - idx);
        }, 0);

        const digitoVerificador = 11 - (soma % 11);
        nin += (digitoVerificador === 10) ? 0 : digitoVerificador;

        return nin;
    }

    static _sanitizeNIN(nin) {
        return nin.replace(/\D/g, '');
    }
}

// Teste da classe HaitiNIN
let nin = '244317715';
console.log(`NIN gerado: ${nin}`);
console.log(`NIN válido: ${HaitiNIN.validar(nin)}`);
