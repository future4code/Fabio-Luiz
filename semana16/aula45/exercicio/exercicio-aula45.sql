USE 'epps-fabio-santos';

SET SQL_SAFE_UPDATES = 0;

-- EXERCICIO 1
-- D)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- EXERCICIO 2
-- A)
UPDATE Actor SET name="Michael B. Jordan", birth_date="1987-02-09" WHERE id='003';

-- B)
UPDATE Actor SET name="JULIANA PÃES" WHERE name LIKE "%Paes";
UPDATE Actor SET name="Juliana Paes" WHERE name LIKE "%PÃES"; 

-- C)
UPDATE Actor SET name="Dwayne 'The Rock' Johnson", salary=43750000, birth_date="1972-05-02", gender="male" WHERE id='005';

-- D)
UPDATE Actor SET id=1ab0 WHERE id='001';
-- ERRO: Unknown column '1ab0' in 'field list' = COLUNA DESCONHECIDA '1ab0' EM 'field list' => A ALTERAÇÃO SOLICITADA NÃO CORRESPONDE AO TIPO DA COLUNA.

-- EXERCICIO 3
-- A)
DELETE FROM Actor WHERE name="Glória Pires";

-- B)
DELETE FROM Actor WHERE salary > 1000000;

-- EXERCICIO 4
-- A)
SELECT MAX(salary) FROM Actor;

-- B)
SELECT MIN(salary) FROM Actor WHERE gender="female";

-- C)
SELECT COUNT(*) FROM Actor WHERE gender="female";

-- D)
SELECT SUM(salary) FROM Actor;

-- EXERCICIO 5
-- A)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- A QUERY REALIZA A CONTAGEM DE ELEMENTOS DA TABELA QUE POSSUEM O VALOR 'gender' E DEPOIS AGRUPA EM SUBGRUPOS, EXIBINDO O RESULTADO DA QUANTIDADE EXISTENTE PARA CADA TIPO DE 'gender' DA TABELA.

-- B)
SELECT id, name FROM Actor ORDER BY name DESC;

-- C)
SELECT * FROM Actor ORDER BY salary ASC;

-- D)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- E)
SELECT AVG(salary), gender FROM Actor GROUP BY gender;



-- EXERCICIO 7
-- A)
SELECT * FROM Filmes WHERE rating_score > 7.5;

-- B)
SELECT AVG(rating_score) FROM Filmes;

-- C)
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURRENT_DATE;

-- D)
SELECT COUNT(*) FROM Filmes WHERE release_date > CURRENT_DATE;

-- E)
SELECT MAX(rating_score) FROM Filmes;

-- F)
SELECT MIN(rating_score) FROM Filmes;

-- EXERCICIO 8
-- A)
SELECT * FROM Filmes ORDER BY title ASC;

-- B)
SELECT * FROM Filmes ORDER BY title DESC LIMIT 5;

-- C)
SELECT * FROM Filmes ORDER BY release_date DESC LIMIT 3;

-- D)
SELECT * FROM Filmes ORDER BY rating_score DESC LIMIT 3;



