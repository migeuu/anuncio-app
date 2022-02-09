CREATE DATABASE anuncios;

CREATE TABLE anuncio (
  idanuncio SERIAL NOT NULL PRIMARY KEY,
  titulo VARCHAR(100),
  descricao VARCHAR(255),
  data_inicial DATE,
  data_final DATE,
  categoria VARCHAR(50),
  email VARCHAR(255),
  telefone INT
);