import React from "react";

const Post = (props) => {
  return (
    <div className="lg:w-1/2 lg:rounded-xl mx-auto w-full min-h-[50vh] bg-white shadow-xl mb-4">
      <header className="flex items-center justify-between p-4 border-b-2">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <div className="flex justify-center items-center hover:text-blue-400">
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
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </header>
      <img
        src={props.image}
        alt="Imagem do post"
        className="w-full bg-black min-h-[50vh]"
      />
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
