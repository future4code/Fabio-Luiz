USE epps-fabio-santos;

-- EXERCICIO 1
-- A)
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY, --PERMITE UMA STRING DE ATÉ 255 CARACTERES E CLASSIFICA COM CHAVE DA TABELA
    name VARCHAR(255) NOT NULL, --PERMITE UMA STRING DE ATÉ 255 CARACTERES E SEU PREENCHIMENTO É OBRIGATÓRIO
    salary FLOAT NOT NULL, --PERMITE UM NÚMERO COM DECIMAIS E SEU PREENCHIMENTO É OBRIGATÓRIO
    birth_date DATE NOT NULL, --PERMITE UMA DATA (FORMATO YYYY-MM-DD) E SEU PREENCHIMENTO É OBRIGATÓRIO
    gender VARCHAR(6) NOT NULL --PERMITE UMA STRING DE ATÉ 6 CARACTERES E SEU PREENCHIMENTO É OBRIGATÓRIO
);

-- B)
SHOW DATABASES; -- EXIBE AS BASES DE DADOS
SHOW TABLES; -- EXIBE AS TABELAS CRIADAS

-- C)
DESCRIBE Actor; -- RETORNA A CLASSIFICAÇÃO DE CADA COLUNA CRIADA, INDICANDO TODAS AS ATRIBUIÇÕES FEITAS EM CADA CAMPO


-- EXERCICIO 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
);

-- A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

-- B)
--ERRO: Duplicate entry '0002' for key 'PRIMARY' = ENTRADA DUPLICADA '002' PARA CHAVE 'PRIMÁRIA'. CHAVES PRIMÁRIAS PRECISAM TER VALOR ÚNICO

-- C)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); --ERRO: Column count doesn't match value count at row 1 = CONTAGEM DE COLUNAS NÃO BATE COM A CONTAGEM ENCONTRADA NA LINHA 1. FORAM INSERIDAS 5 INFORMAÇÕES PORÉM NO CABEÇALHO FORAM INFORMADAS APENAS 3 COLUNAS.

-- D)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- ERRO: Field 'name' doesn't have a default value = CAMPO 'name' NÃO TEM UM VALOR PADRÃO. O CAMPO NOME ESTÁ DEFINIDO COMO OBRIGATÓRIO E NÃO FOI PASSADO NO CABEÇALHO NEM POSSUI UM VALOR PADRÃO DEFINIDO.

-- E)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- ERRO: Incorrect date value: '1950' for column 'birth_date' at row 1 = VALOR INCORRETO DE DATA '950' PARA COLUNA 'birth_date' NA LINHA 1. O TIPO DE VALOR INSERIDO É INCOMPATÍVEL COM O DEFINIDO NA CRIAÇÃO DA TABELA.

-- F)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "003",
    "Lázaro Ramos",
    6250000,
    "1978-11-01",
    "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "004",
    "Taís Araújo",
    200000,
    "1978-11-25",
    "female"
);

-- EXERCICIO 3
-- A)
SELECT * FROM Actor WHERE gender = "female";

-- B)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

-- C)
SELECT * FROM Actor WHERE gender = "invalid"; -- RETORNA UMA TABELA VAZIA

-- D)
SELECT id, name, salary FROM Actor WHERE salary > 500000;

-- E)
-- SELECT id, nome from Actor WHERE id = "002"; -- ERRO: Unknown column 'nome' in 'field list' = COLUNA DESCONHECIDA 'nome' EM 'field list'. O CAMPO 'nome' NÃO FOI DEFINIDO NA TABELA MAS SIM 'name'.
SELECT id, name from Actor WHERE id = 002;

-- EXERCICIO 4
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- A)
-- A QUERY BUSCA TODOS OS ATORES QUE POSSUEM NOME INICIADO EM A OU J. DENTRO DESSE GRUPO, SELECIONA QUEM POSSUI SALÁRIO ACIMA DE 300.000 E RETORNA A RESPOSTA

-- B)
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 300000;

-- C)
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

-- D)
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

-- EXERCICIO 5
-- A)
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY, --PERMITE UMA STRING DE ATÉ 255 CARACTERES E CLASSIFICA COM CHAVE DA TABELA
    title VARCHAR(255) NOT NULL, --PERMITE UMA STRING DE ATÉ 255 CARACTERES E SEU PREENCHIMENTO É OBRIGATÓRIO 
    synopsis TEXT NOT NULL, --PERMITE UMA STRING SEM LIMITAÇÃO DE TAMANHO E SEU PREENCHIMENTO É OBRIGATÓRIO
    release_date DATE NOT NULL, --PERMITE UMA DATA (FORMATO YYYY-MM-DD) E SEU PREENCHIMENTO É OBRIGATÓRIO
    rating_score INT CHECK (rating_score BETWEEN 0 AND 10) -- PERMITE UM NÚMERO INTEIRO ENTRE 0 E 10 E O PREENCHIMENTO NÃO É OBRIGATÓRIO
);

-- B)
INSERT INTO Filmes (id, title, synopsis, release_date, rating_score)
VALUES(
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);

-- C)
INSERT INTO Filmes (id, title, synopsis, release_date, rating_score)
VALUES(
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);

-- D)
INSERT INTO Filmes (id, title, synopsis, release_date, rating_score)
VALUES(
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

-- E)
INSERT INTO Filmes (id, title, synopsis, release_date, rating_score)
VALUES(
    "004",
    "O Auto da Compadecida",
    "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
    "2000/09/10",
    10
);

-- EXERCICIO 6
-- A)
SELECT id, title, rating_score FROM Filmes WHERE id="004";

-- B)
SELECT * FROM Filmes WHERE title="Doce de Mãe";

-- C)
SELECT id, title, synopsis FROM Filmes WHERE rating_score >= 7;

-- EXERCICIO 7
-- A)
SELECT * FROM Filmes WHERE title LIKE "%vida%";

-- B)
SELECT * FROM Filmes WHERE title LIKE "%filme%" OR synopsis LIKE "%filme%";

-- C)
SELECT * FROM Filmes WHERE release_date <= CURRENT_DATE;

-- D)
SELECT * FROM Filmes WHERE release_date <= CURRENT_DATE AND (title LIKE "%mãe%" OR synopsis LIKE "%mãe%") AND rating_score > 7;

