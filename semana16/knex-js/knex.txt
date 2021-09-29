### Exercício 1
`a)` Quando usamos o raw a resposta vem com alguns dados desnecessários, como os dados das tabelas do workbench.

`b)` 
```
const searchName = async (name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`)
    return result
}`
```

`c)`

```
const getGender = async (gender: string): Promise<any> => {
    const result = await 
    connection.raw(`SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`)

    return result
}

```













