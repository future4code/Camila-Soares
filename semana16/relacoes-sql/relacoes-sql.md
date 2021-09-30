### Exercício 1
`a)` Chave estrangeira é usada para relacionar dados entre duas tabelas.

`b)` 
```
INSERT INTO Rating(id,comment,rate,movie_id)
VALUES ('001', 'Filme interessante', 5, '003');

```

`c)` Ao tentar criar uma avaliação de um filme para um id que não existe,recebi o erro:

* Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails

Obtive esse erro pois estou tentando passar a avaliação de um filme para um id que não existe.

`d`) 
```
ALTER TABLE Filmes DROP COLUMN avaliacao;
```
`e)`
Ao tentar deletar um Filme que possui avaliação,
```
DELETE FROM Filmes WHERE avaliacao = 7.5;
```
Obtive o erro; 

* Error Code: 1054. Unknown column 'avaliacao' in 'where clause'

Pois,como apaguei a coluna avaliação, não existe mais essa coluna.

### Exercício 2

`a)` Essa nova tabela criada possui um id do filme e outro id do ator. Os id's possuem um VARCHAR com limite de caracteres de até 255. A tabela possui duas chaves estrangeiras, que vai relacionar o id da tabela de Filmes e o id da tabela de atores.

`b)`

```

INSERT INTO MovieCast(movie_id,actor_id)
VALUES(
"001",
"002"
);
```
```
INSERT INTO MovieCast(movie_id,actor_id)
VALUES(
"003",
"004"
);
```
```
INSERT INTO MovieCast(movie_id,actor_id)
VALUES(
"005",
"007"
);
```

`c)` 
Ao tentar criar uma relação inexistente entre um filme e um ator,
```
INSERT INTO MovieCast(movie_id,actor_id)
VALUES(
"001","006");
```` 
Obtive o erro:
* Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147194-camila-soares`.`MovieCast`)

Obtive esse erro pois estava tentando criar uma relação entre o filme e o ator,que não existe.

`d`)

### Exercício 3

`a) A query acima seleciona tudo da tabela Movie e com o Inner Join retorna os dados relacionados nas duas tabelas. On é uma condição que se não for retornado o id do filme, retorna também a avaliaçãodo filme.




