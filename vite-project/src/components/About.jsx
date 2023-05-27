import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-black">
            <div className="max-w-xl p-8 bg-black rounded-lg shadow-lg">
                <h1 className="mb-6 font-bold text-center text-1xl text-red">À propos du développeur:</h1>

                <p className="text-red">
                    "Rencontrez un développeur frontend web, dont la passion intense pour le domaine témoigne d'une curiosité inépuisable et d'une obsession pour le code. Mon expérience de 8 ans chez Dejeuner AM est le symbole de sa stabilité, de son engagement durable. De plus, son Bac en gestion d'entreprise illustre sa capacité d'apprentissage et d'adaptation. Laissez-le transformer vos projets web grâce à sa passion, sa constance et son aptitude à apprendre continuellement."
                </p>
            </div>
        </div>
    );
};

export default About;

