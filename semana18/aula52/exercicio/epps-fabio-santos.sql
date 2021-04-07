CREATE TABLE Address (
    user_id VARCHAR(255) NOT NULL,  
	cep VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(6) NOT NULL,
    complement VARCHAR(255),
    neighbourhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);