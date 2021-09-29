### Exercício 1
 a) O FLOAT é utilizado para representar um número não inteiro. O VARCHAR(255) é o número máximo de caracteres. O NOT NULL significa que eese item na tabela precisa de um valor. O DATE é para representar uma data.
b) O comando SHOW DATABASES mostrou a database,mostrou o information_schema lovelace-2147194-camila-soares. O SHOW TABLES mostrou a coluna de Actor.

c) Ao rodar o comando DESCRIBE Actor mostrou as 5 linhas da tabela, mostrou o id,name,salary,birth_date e gender.

### Exercício 2
a) 
```
INSERT INTO Actor (id,name,salary,birth_date,gender)
VALUES (
"002",
"Glória Maria",
1200000,
"1963-08-23",
"female"

);
```

b) Ao tentar fazer uma query diferente com o mesmo id da Glória Pires,recebi uma mensagem de erro:
* Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

Houve essa mensagem de erro pois já existe uma informação com esse mesmo ID.

c) Ao inserir a query:
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

```
Obtive o erro: 
* Error Code: 1136. Column count doesn't match value count at row 1.

Esse erro ocorre pois falta informações na query,como o birth_date e gender. O correto seria:
```
INSERT INTO Actor (id,name,salary,birth_date,gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

```

d) Ao colocar a query:
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
);
```
Obtive o erro:
* Error Code: 1364. Field 'name' doesn't have a default value

Esse erro ocorre pois o item 'name' não possui um valor. O correto seria:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Bianca Rinaldi",
400000,
"1949-04-18",
"male"
);
```

e) Ao inserir a query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
Obtive o erro:
* Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

Esse erro ocorre pois a data de nascimento é uma string,o correto seria; "1979-03-26"

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Caio Castro",
  123456,
  "1979-01-22", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Isabelle Drummond",
  3455666,
  "1994-04-12", 
  "female"
);
```

### Exercício 3

a) 
```
SELECT id,name,salary,birth_date,gender from Actor WHERE gender = "female"
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c)
```
SELECT id,name,salary,birth_date,gender from Actor WHERE gender = "invalid"
```

O resultado que apareceu foi a tabela com as linhas em branco.

d) 
```
SELECT id,name,salary from Actor WHERE salary < 500.000
```

e)  Ao escrever a query:
```
SELECT id, nome from Actor WHERE id = "002"
```

Ocorre o erro:
*	Error Code: 1054. Unknown column 'nome' in 'field list'

Esse erro ocorre pois não existe uma propriedade 'nome' na tabela,e sim 'name'. O correto seria:

```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 4
a) A query acima seleciona tudo da tabela Actor e procura nome que começe com "A" ou com "J" e que tenha o salário maior que 300000.

b)
```
SELECT * FROM Actor WHERE name <> "A" AND salary > 350.00000; 
```

c)
```
SELECT * FROM Actor WHERE name = "%G%" or name LIKE "%g%";
```

d)
```
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```
### Exercício 5
a)
```
  CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255) NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao VARCHAR(10) NOT NULL
);
```

b)
```
INSERT INTO Filmes (nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "001", 
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "06/01/2006", 
  "7"
);
```

c)
 ```
INSERT INTO Filmes (nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "27/12/2012", 
  "10"
);
```

d)
```
INSERT INTO Filmes (nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "02/11/2017", 
  "8"
);

```
e)

```
INSERT INTO Filmes (nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "004", 
  "Minha Mãe É uma Peça",
  "Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos. Um dia, após descobrir que eles a consideram uma chata, resolve sair de casa sem avisar ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida tia Zélia para desabafar suas tristezas do presente e recordar os bons tempos do passado.",
  "21/6/2013", 
  "8"
);
```

### Exercício 6

a)
```
SELECT id, nome, avaliacao FROM Filmes WHERE id = "004";
```

b) 
```
SELECT * FROM Filmes WHERE nome = "Minha Mãe É uma Peça";
```

c)
```
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;
```

### Exercício 7

a)
```
SELECT * FROM Filmes WHERE nome LIKE "%vida%";
```

b)
```
SELECT * FROM Filmes WHERE nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";
 ```
 
 c)
  ```
 SELECT * FROM Filmes WHERE data_lancamento < "2020-05-04";

 ```
 
 d)
  ```
 SELECT * FROM Filmes WHERE data_lancamento < "2020-05-04" AND nome LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%" AND avaliacao > 7;
```
