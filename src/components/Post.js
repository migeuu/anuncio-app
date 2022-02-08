import React from "react";
import { FaEllipsisV } from "react-icons/fa";

const Post = (props) => {
  return (
    <div className="w-screen min-h-[50vh] bg-white shadow-xl">
      <header className="flex items-center justify-between p-4 border-b-2">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <FaEllipsisV className="hover:text-blue-400 transition duration-300" />
      </header>
      <img src={props.image} alt="Imagem do post" className="w-full bg-black min-h-[50vh]" />
      <div className="p-4 text-gray-600">
        <p>{props.description}</p>
        <div className="flex">
          <span>
            <span className="font-bold">Criado:</span> {props.datestart}
          </span>
          <span>
            <span className="font-bold">Até:</span> {props.dateend}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
