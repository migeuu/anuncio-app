CREATE DATABASE anuncios;

CREATE TABLE anuncio (
  idanuncio SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(255),
  date_start DATE,
  date_end DATE,
  category VARCHAR(50),
  email VARCHAR(255),
  phone INT
);

INSERT INTO
  anuncio (
    title,
    description,
    date_start,
    date_end,
    category,
    email,
    phone
  )
VALUES
  (
    'Honda Fit 2020',
    'Carro zeradinho na faixa, precinho de banana!!',
    '2022-02-10',
    '2022=02-20',
    'Automóveis',
    'miguel@exemplo.com',
    84290137
  );