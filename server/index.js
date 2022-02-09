// iniciando o server
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// uso de middleware
app.use(cors());
app.use(express.json());

// Rotas //

// Create anuncio

app.post("/anuncios", async (req, res) => {
  try {
    const {
      titulo,
      descricao,
      data_inicial,
      data_final,
      categoria,
      email,
      telefone,
    } = req.body;
    const newAnuncio = await pool.query(
      "INSERT INTO anuncio (titulo, descricao, data_inicial, data_final, categoria, email, telefone) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [titulo, descricao, data_inicial, data_final, categoria, email, telefone]
    );
    res.json(newAnuncio);
  } catch (err) {
    console.error(err.message);
  }
});

// Get todos anuncios

app.get("/anuncios", async (req, res) => {
  try {
    const allAnuncios = await pool.query("SELECT * FROM anuncio");
    res.json(allAnuncios.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get em um anuncio unico

app.get("anuncios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const anuncio = await pool.query(
      "SELECT * FROM anuncio WHERE idanuncio = $1",
      [id]
    );

    res.json(anuncio.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update em um anuncio unico

app.put("anuncios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      titulo,
      descricao,
      data_inicial,
      data_final,
      categoria,
      email,
      telefone,
    } = req.body;

    const updateAnuncio = await pool.query(
      "UPDATE anuncio SET titulo = $1, descricao = $2, data_inicial = $3, data_final = $4, categoria = $5, email = $6, telefone = $7 WHERE idanuncio = $8 ",
      [
        titulo,
        descricao,
        data_inicial,
        data_final,
        categoria,
        email,
        telefone,
        id,
      ]
    );

    res.json("Anúncio atualizado!");
  } catch (err) {
    console.error(err.message);
  }
});

// Deletar anuncio

app.delete("anuncios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAnuncio = await pool.query(
      "DELETE FROM anuncio WHERE idanuncio = $1",
      [id]
    );

    res.json("Anúncio excluído!");
  } catch (err) {
    console.error(err.message);
  }
});

// server methods
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
