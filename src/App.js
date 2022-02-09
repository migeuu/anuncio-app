import React from "react";
import Post from "./components/Post";
import { Link } from "react-router";

const App = () => {
  const search = () => {
    console.log("oi");
  };

  return (
    <div className="h-screen bg-gray-200">
      <header className="flex justify-between items-center p-8 bg-white shadow-lg mb-4">
        <h1>OLX</h1>
        <Link></Link>
        <div className="lg:w-1/3 w-2/3 flex flex-row items-center">
          <input
            type="search"
            placeholder="Pesquisar"
            className="w-[90%] border-b-2 shadow-md p-2 rounded-xl outline-blue-400 mr-2"
          />
          <div
            className="flex justify-center items-center w-[10%] h-full p-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300"
            onClick={search}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
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
