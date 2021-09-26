export type Transaction = {
    valor: number;
    data: Date,
    descricao: string
}

export type Conta = {
    nome: string,
    cpf: string,
    dataDeNascimento: Date,
    saldo: number,
    statement: Array<Transaction>
}
