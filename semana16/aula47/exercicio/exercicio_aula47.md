### Exercicio 1

#####a)
Chave estrangeira é uma chave associada à Primary Key de uma outra tabela, gerando uma correlação entre duas tabelas diferentes.

##### b)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES
('abc', 'filme chaaaato...', '5.1', '001'),
('cde', 'Bem interessante', '9.3', '002'),
('efg', 'Fantástico!!!', '10', '003'),
('hij', 'Dormi na metade', '4.6', '004'),
('jkl', 'Melhor filme do ano!', '9.6', '005'),
('lmn', 'Divertido. Ok.', '7.6', '006'),
('nop', 'Shoooooooow', '9.2', '003'),
('pqr', 'Recomendado', '8.1', '005'),
('rst', 'Legalzin', '6.4', '002');
```

##### c)
```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES
('xyz', 'filme bem chatinho', '3', '100');
```
``` Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-fabio-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))```
O erro cita que não é possível atualizar a linha pois a foreign key não corresponde aos critérios, ou seja, não existe na tabela original.

##### d)
ALTER TABLE Movie DROP COLUMN rating_score;

##### e)
```
DELETE FROM Movie WHERE id='001';
```
``` Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-fabio-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))```
O erro cita que não é possível deletar ou atualizar a linha pois há incompatibilidade com uma foreign key, ou seja, está referenciada em outra tabela e por isso não pode ser excluída.

### Exercicio 2
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

##### a)
Essa tabela possui apenas duas colunas, que estão correlacionadas a outras duas tabelas. movie_id referencia com o id da tabela Movie e actor_id referencia com o id da tabela Actor. Isso nos permite correlacionar as informações das duas tabelas.

##### b)
```
INSERT INTO MovieCast(movie_id,actor_id)
VALUES
('001','009'),
('002','008'),
('003','007'),
('003','010'),
('004','003'),
('005','008'),
('006','007'),
('006','008');
```

##### c)
```
INSERT INTO MovieCast(movie_id,actor_id)
VALUES
('019','009');
```

``` Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-fabio-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))```
Não é permitida a adição pois o id inserido não corresponde a nenhuma linha da tabela original.

##### d)
```
DELETE FROM Actor WHERE id='003';
```
``` Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-fabio-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))```
Não é possível deletar um ator que possui correlação por Foreign Key em outra tabela.

### Exercicio 3
```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

##### a)
A query concatena as informações de duas tabelas. O Operador ON é responsável por linkar as informações das duas tableas, mostrando as linhas de forma correlacionada.

##### b)
```
SELECT Movie.id,Movie.title,Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercicio 4
##### a)
```
SELECT Movie.id,Movie.title,Rating.rate,Rating.comment FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

##### b)
```
SELECT Movie.id,Movie.title,MovieCast.actor_id FROM MovieCast 
RIGHT JOIN Movie ON Movie.id = MovieCast.movie_id;
```

##### c)
```
SELECT AVG(Rating.rate) as avg_rate, Movie.id, Movie.title FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);
```

### Exercicio 5
```
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

##### a)
A query está junstando, primeiramente, a tabela de filmes com a tabela de elenco. Nessa segunda tabela temos as colunas com o id do filme e id do ator do elenco. Em seguida unimos a isso os dados da tabela de atores, correlacionando com o id do ator que recebemos da tabela de elenco. Assim geramos uma tabela final onde são mostrados os filmes e seu respectivo elenco. São necessários dois JOIN porque a concatenação é feita a partir de uma tabela intermediária MovieCast, que conecta duas outras tabelas independentes.

##### b)
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name  FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

##### c)
O resultado é uma tabela que exibe todos os filmes e seus respectivos ids e os atores presentes em cada filme com seus respectivos ids.

##### d)
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name, r.rate, r.comment  
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
LEFT JOIN Rating r ON r.movie_id = m.id;
```

### Exercicio 6
##### a)
Relação M:N = Vários itens se relacionam com vários itens

##### b)
```
CREATE TABLE Oscar (
id VARCHAR(255) PRIMARY KEY,
category VARCHAR(100) NOT NULL UNIQUE
);
```
```
CREATE TABLE Winner (
oscar_id VARCHAR(255),
movie_id VARCHAR(255),
award_date DATE,
FOREIGN KEY (oscar_id) REFERENCES Oscar(id),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

##### c)
```
INSERT INTO Oscar(id, category)
VALUES
('001', 'Melhor filme'),
('002', 'Melhor diretor'),
('003', 'Melhor Ator'),
('004', 'Melhor Atriz'),
('005', 'Melhor Trilha Sonora'),
('006', 'Melhor Fotografia'),
('007', 'Melhor Ator Coadjuvante'),
('008', 'Melhor Atriz Coadjuvante');
```
```
INSERT INTO Winner(oscar_id, movie_id, award_date)
VALUES
('007', '001', '2021-01-01'),
('001', '002', '1977-12-01'),
('002', '003', '2001-11-27'),
('003', '004', '2000-12-11'),
('004', '005', '2000-11-10'),
('005', '005', '2016-12-11'),
('006', '002', '1977-12-01'),
('003', '003', '2001-11-27'),
('001', '004', '2000-12-11'),
('005', '001', '2021-01-01'),
('001', '006', '2020-11-11'),
('002', '006', '2020-11-11');
```
```
SELECT m.id, m.title, o.category, w.award_date
FROM Movie m
LEFT JOIN Winner w
ON m.id = w.movie_id
JOIN Oscar o
ON w.oscar_id = o.id; 
```




