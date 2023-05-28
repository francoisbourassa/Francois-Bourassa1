import React from 'react';

const Home = () => {
  const name = "François Bourassa";

  return (
    <div className="p-20 bg-black rounded shadow">
      <h2 className="mb-2 font-bold text-white text-1xl"> Ce que les gens disent de moi:</h2>
      <p className="mt-2 text-red">
        {name}, professionnel reconnu, rapide et courtois, offre une performance exceptionnelle dans des délais courts, favorisant la satisfaction client. Son efficacité et sa précision contribuent à la réussite dans des environnements dynamiques. En rejoignant votre organisation, il promet d'améliorer l'efficacité opérationnelle et la culture d'excellence, tout en renforçant la satisfaction des parties prenantes et l'image de l'entreprise.
      </p>
    </div>
  );
};

export default Home;
