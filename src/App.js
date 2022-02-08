import React from "react";
import { FaSearch } from "react-icons/fa";
import Post from "./components/Post";

const App = () => {
  const search = () => {
    console.log("oi");
  };

  return (
    <div className="h-screen bg-gray-200">
      <header className="flex justify-between items-center p-8 bg-white shadow-lg mb-4">
        <h1>OLX</h1>
        <div className="lg:w-1/3 w-2/3 flex flex-row items-center">
          <input
            type="search"
            placeholder="Pesquisar"
            className="w-[90%] border-b-2 shadow-md p-2 rounded-xl outline-blue-400 mr-2"
          />
          <FaSearch
            onClick={() => {
              search();
            }}
            className="w-[10%] hover:text-blue-400 transition duration-300"
          />
        </div>
      </header>
      <Post
        title="Olá marilene"
        description="Hoje irá ter tainha vinho e muito amor"
        datestart="08/02/2022"
        dateend="20/02/2022"
      />
    </div>
  );
};

export default App;
