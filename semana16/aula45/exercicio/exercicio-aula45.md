### EXERCICIO 1)
##### A)
```ALTER TABLE Actor DROP COLUMN salary;``` => EXCLUI A COLUNA ```salary```

##### B)
```ALTER TABLE Actor CHANGE gender sex VARCHAR(6);``` => ALTERA A COLUNA ```gender``` PARA ```sex``` E ADICIONA O TIPO ```VARCHAR(6)```

##### C)
```ALTER TABLE Actor CHANGE gender gender VARCHAR(255);``` => ALTERA O TIPO A COLUNA ```gender``` PARA ```VARCHAR(255)```

##### D)
```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

### EXERCICIO 2)
##### A)
```
UPDATE Actor
SET name="Michael B. Jordan", birth_date="1987-02-09"
WHERE id='003';
```

##### B)
```
UPDATE Actor SET name="JULIANA PÃES" WHERE name LIKE "%Paes";
```
```
UPDATE Actor SET name="Juliana Paes" WHERE name LIKE "%PÃES"; 
```

##### C)
```
UPDATE Actor
SET name="Dwayne 'The Rock' Johnson", salary=43750000, birth_date="1972-05-02", gender="male"
WHERE id='005';
```

##### D)
```
UPDATE Actor SET id=1ab0 WHERE id='001';
```
```ERRO: Unknown column '1ab0' in 'field list'``` = COLUNA DESCONHECIDA '1ab0' EM 'field list' => A ALTERAÇÃO SOLICITADA NÃO CORRESPONDE AO TIPO DA COLUNA. 

### EXERCICIO 3
##### A)
```DELETE FROM Actor WHERE name="Glória Pires";```
Obs.: Escolhi Glória Pires pois já tinha alterado a linha que continha Fernanda Montenegro

### EXERCICIO 4
##### A)
```
SELECT MAX(salary) FROM Actor;
```

##### B)
```
SELECT MIN(salary) FROM Actor WHERE gender="female";
```

##### C)
```
SELECT COUNT(*) FROM Actor WHERE gender="female";
```

##### D)
```
SELECT SUM(salary) FROM Actor;
```

### EXERCICIO 5
##### A)
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
R.: A QUERY REALIZA A CONTAGEM DE ELEMENTOS DA TABELA QUE POSSUEM O VALOR 'gender' E DEPOIS AGRUPA EM SUBGRUPOS, EXIBINDO O RESULTADO DA QUANTIDADE EXISTENTE PARA CADA TIPO DE 'gender' DA TABELA.

#####  B)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

#####  C)
```
SELECT * FROM Actor ORDER BY salary ASC;
```

#####  D)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

#####  E)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### EXERCICIO 6
##### A)
```
ALTER TABLE Filmes ADD playing_limit_date DATE;
```

##### B)
```
ALTER TABLE Filmes
CHANGE rating_score rating_score FLOAT CHECK (rating_score BETWEEN 0 AND 10);
```

##### C)
```
UPDATE Filmes 
SET 
title="A Viúva das Sombras", 
synopsis="Baseado em eventos reais, o terror conta a história de um grupo de voluntários que entra em uma densa floresta para resgatar um adolescente desaparecido. Nesse mesmo lugar, diversas pessoas sumiram nas últimas três décadas, e apenas alguns corpos foram encontrados, todos nus. A comunicação com a base fora da mata é interrompida misteriosamente. Sem sucesso na busca pelo jovem, eventos sobrenaturais acontecem e a equipe começa acreditar na lenda local que diz existir espíritos sombrios que levam as pessoas", 
release_date="2021-02-18", rating_score="5.1", 
playing_limit_date="2021-04-01" 
WHERE id='001';
```
```
UPDATE Filmes 
SET 
title="Rocky: Um Lutador", 
synopsis="Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne.", 
release_date="1977-01-07", 
rating_score="9.9", 
playing_limit_date="1977-03-01" 
WHERE id='002';
```

##### D)
```
DELETE FROM Filmes WHERE id='003';
```

```UPDATE Filmes SET title="Era Uma Vez No México" WHERE id='003';```
R.: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 => NENHUM ERRO FOI EXIBIDO POIS A REQUISIÇÃO ESTÁ COM SINTAXE CORRETA. COMO NÃO ENCONTROU O ITEM INDICADO, INFORMOU QUE ATUALIZOU 0 LINHAS.


### EXERCICIO 7
##### A)
```
SELECT * FROM Filmes WHERE rating_score > 7.5;
```

##### B)
```
SELECT AVG(rating_score) FROM Filmes;
```

##### C)
```
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURRENT_DATE;
```

##### D)
```
SELECT COUNT(*) FROM Filmes WHERE release_date > CURRENT_DATE;
```

##### E)
```
SELECT MAX(rating_score) FROM Filmes;
```

##### F)
```
SELECT MIN(rating_score) FROM Filmes;
```

### EXERCICIO 8
##### A)
```
SELECT * FROM Filmes ORDER BY title ASC;
```

##### B)
```
SELECT * FROM Filmes ORDER BY title DESC LIMIT 5;
```

##### C)
```
SELECT * FROM Filmes ORDER BY release_date DESC LIMIT 3;
```

##### D)
```
SELECT * FROM Filmes ORDER BY rating_score DESC LIMIT 3;
```