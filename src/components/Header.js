import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const search = () => {
    console.log("oi");
  };

  return (
    <header className="flex justify-between items-center p-8 bg-white shadow-lg mb-4">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-auto"
          viewBox="0 0 968.19 513"
        >
          <path
            d="M183.46,423.61c-55.23,0-93.32-46.27-93.32-114.69,0-69.09,38.09-115.36,93.32-115.36s93.31,46.27,93.31,114.7c0,69.08-38.09,115.35-93.31,115.35m0,86.69c102.2,0,183.45-86,183.45-202,0-114.7-76.81-201.38-183.45-201.38C81.25,106.88,0,192.91,0,308.92,0,425.57,76.81,510.3,183.46,510.3"
            fill="#6e0ad6"
            fill-rule="evenodd"
          />
          <path
            d="M442.45,356.49H617.66c12.06,0,19-7.17,19-19.56V280.24c0-12.38-7-19.55-19-19.55H500.22V19.55c0-12.38-7-19.55-19-19.55H423.41c-12.06,0-19,7.17-19,19.55V317.39c0,25.41,13.33,39.1,38.08,39.1"
            fill="#8ce563"
            fill-rule="evenodd"
          />
          <path
            d="M680.51,504.42,785.88,380l102.2,124.47c8.89,11.09,20.32,11.09,30.47,2l41.27-37.15c10.15-9.12,11.42-20.85,1.9-31.28L848.09,307.61,951.56,188.34c8.89-10.42,8.26-21.51-1.9-31.28l-38.72-35.84c-10.16-9.78-21.59-9.13-30.48,2L785.88,235.92,689.39,123.17c-8.88-10.43-20.31-11.73-30.47-2l-40,36.49c-10.16,9.78-10.79,20.21-1.27,31.28L723,308.26l-114.9,131c-9.53,11.07-8.26,22.15,1.9,31.28l40,35.84c10.16,9.13,21.59,8.47,30.47-2"
            fill="#f28000"
            fill-rule="evenodd"
          />
        </svg>
      </Link>
      <div className="lg:w-1/3 w-2/3 flex flex-row items-center">
        <input
          type="search"
          placeholder="Pesquisar"
          className="w-[90%] border-b-2 shadow-md p-2 rounded-xl outline-blue-400 mr-2"
        />
        <div
          className="flex justify-center items-center w-[10%] h-full rounded-full hover:text-blue-400 transition duration-300"
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
  );
};

export default Header;
