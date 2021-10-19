### Exercício 1

`a)` Round/Cost é o tempo de execução que vai ser criptogragado. Salt é a string aleatória que será gerada. Os valores recomendados para o round são 10 ou 12. O valor que usei é o 12, porque é o valor padrão das libs.

`b)`

  public generateHash = (plainText: string): string => {
    const cost = 12
    const salt = genSaltSync(cost)
    const cipherText = hashSync(plainText, salt)

    return cipherText
  }

`c)`

  public compareHash = (
    plainText: string,
    cipherText: string
  ) => {
    const result = compareSync(plainText, cipherText)

    return result
  }
}


### Exercício 2

`a)` Eu acho que para realizar os testes deve modificar primeiro o cadastro. Pois o cadastro vem antes,e para criar o login tem que passar pelo cadastro.

`b)`

const cipherPassword: string = new HashManager().generateHash(password)


`c)`

const passwordIsCorrect:boolean = new HashManager().compareHash(password, user.password)


`d)` Não foi preciso modificar o endpoint. Para atualizar não é necessário modificar,pois só precisa da token.

