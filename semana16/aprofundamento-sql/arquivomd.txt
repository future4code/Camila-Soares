### Exercício 1
a) O comando DROP COLUMN  remove uma coluna da tabela.

b) Com o comando CHANGE, na tabela Actor, o gender será trocado pelo sex que terá um limite de caracteres 6: VARCHAR(6).

c) Com o comando CHANGE, na letra c não está mudando o valor, então continuará sendo gender o  nome, o que foi mudando é o limite de caracteres,que passa a ser 255: VARCHAR(255)

d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)
```
UPDATE Actor SET name = "Glória Pires", birth_date= "1940-2-21" WHERE id= "003";
```

b)
```
UPDATE Actor SET name = "JULIANA PAES" where name = "Juliana Paes";
```

c)
```
UPDATE Actor SET name = "Ju Paes", salary = 302012, birth_date = "1978-3-21",gender = "male" WHERE id = "005";
```

d)
```
UPDATE Actor SET city = "Brazil" WHERE id = "001";
```

* Erro: Error Code: 1054. Unknown column 'city' in 'field list'

Obtive esse erro pois estou tentando colocar um valor na coluna 'city' que não existe.

### Exercício 3

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;
```

### Exercício 4

a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor;
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) Quando testei o operador GROUP BY, a tabela ficou organizada em relação ao gender, ficou organizado e separado por gêneros.

b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

c)
```
SELECT salary FROM Actor ORDER BY salary;
```

d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)

```
SELECT AVG(salary) fROM Actor GROUP BY gender;
```

### Exercício 6

a)
```
ALTER TABLE Filmes ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
```

c)
```
UPDATE Filmes SET playing_limit_date = "2021-01-20" where id = "003";
```

d)
```
DELETE FROM Filmes WHERE nome = "Minha Mãe É uma Peça";
```

### Exercício 7

a)
```
SELECT * FROM Filmes WHERE avaliacao < 7.5;
```

b)
```
SELECT AVG(avaliacao) FROM Filmes;
```

c)
```
SELECT COUNT(*) FROM Filmes;
```
d)
```
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();
```

e)
```
SELECT MAX(avaliacao) FROM Filmes;
```

f)
```
SELECT MIN(avaliacao) FROM Filmes;
```

### Exercício 8

a)
```
SELECT * FROM Filmes ORDER BY name ASC; 
```

b)
```
SELECT * FROM Filmes ORDER BY nome LIMIT 5;
```
