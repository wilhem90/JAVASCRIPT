const Pessoa = [
    {id: 3, nome: "Herold Pierre", nascimento: "22/11/1995" },
    {id: 1, nome: "Wilhem Wundt Maxime", nascimento: "12/01/1990" },
    {id: 2, nome: "Jonas Louis", nascimento: "11/05/1980" },
]

const novaPessoa = new Map()
for (const iterator of Pessoa) {
    const {id} = iterator
    novaPessoa.set(id, {...iterator})
}

console.log(novaPessoa);