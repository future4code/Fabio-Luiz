CREATE TABLE labook_users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM("normal", "admin") DEFAULT ("normal")
);

CREATE TABLE labook_posts(
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    type ENUM("normal", "event") DEFAULT ("normal"),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    author_id VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES labook_users(id)
    ON DELETE CASCADE 
)