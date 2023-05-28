import React from 'react';
import { projects } from "../constants";

const Monparcours = () => {
  return (
    <div className="p-20">
      <h1 className="mb-4 font-bold text-white text-1xl">Mon parcours:</h1>
      {projects.map((project) => (
        <div key={project.id} className="mb-2">
          <h2 className="font-normal text-1xl text-red">{project.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Monparcours;
