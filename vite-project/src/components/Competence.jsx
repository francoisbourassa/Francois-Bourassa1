import React from 'react';
import { devTools } from "../constants";

const Competence = () => {
  return (
    <div className="p-4 ml-14">
      <h1 className="mb-4 ml-2 font-bold text-white text-1xl">Mes Compétences:</h1>
      {devTools.map((tool) => (
        <div key={tool.id} className="p-3 mb-4">
          <h2 className="mb-2 font-normal text-white text-1xl">{tool.toolName}</h2>
          <a href={tool.link} className="underline text-red">En savoir plus</a>
        </div>
      ))}
    </div>
  );
};

export default Competence;
