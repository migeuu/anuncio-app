import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  const nomeSite = "localhost";

  return (
    <div className="mx-auto w-[95%] lg:p-8 p-4 rounded-xl bg-white shadow-xl">
      <h1 className="lg:text-3xl text-2xl font-bold mb-2">
        Veja aqui anúncios! 🔎
      </h1>
      <p className="mb-4">
        Aqui no site {nomeSite}, você poderá encontrar anúncios de todas
        categorias e com grande diversidade, cheque agora mesmo abaixo:
      </p>
      <div className="flex md:flex-row md:justify-between flex-col rounded-xl text-white">
        <Link className="card-btn bg-purple-600 md:m-0 mb-4 hover:bg-purple-800" to="/anuncios">
          <h1 className="font-bold text-xl">Anúncios Ativos 📝</h1>
          <p className="w-10/12 text-center">
            Cheque agora mesmo os produtos disponíveis em nossos anúncios.
          </p>
        </Link>
        <Link
          className="card-btn bg-purple-400 hover:bg-purple-500"
          to="/criar-anuncio"
        >
          <h1 className="font-bold text-xl">Novo Anúncio ✏</h1>
          <p className="w-2/3 text-center">Crie seu anúncio, é gratuito!</p>
        </Link>
      </div>
    </div>
  );
};

export default App;
