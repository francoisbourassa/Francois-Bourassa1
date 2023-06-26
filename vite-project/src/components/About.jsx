// Importation de la bibliothèque React pour pouvoir utiliser les fonctionnalités de React dans ce fichier.
import React from 'react';

// Déclaration d'un composant fonctionnel React nommé 'About'.
const About = () => {
    // Le composant retourne du JSX qui décrit ce que l'interface utilisateur doit afficher.
    return (
        // 'div' parent qui utilise plusieurs classes de style pour définir son apparence et son comportement.
        <div className="flex flex-col items-center justify-center bg-black">
           
            <div className="max-w-xl p-10 border-2 border-white rounded-lg shadow-lg">
            
                <h1 className="mb-6 font-bold text-center text-white text-1xl">À propos du développeur:</h1>
                
              
                <p className="text-red">
                    "Rencontrez un développeur web, dont la passion intense pour le domaine témoigne d'une curiosité inépuisable et d'une obsession pour le code. Mon expérience de 8 ans chez Déjeuner AM est le symbole de ma stabilité, de mon engagement durable. De plus, mon Bac en gestion d'entreprise illustre ma capacité d'apprentissage et d'adaptation. Laissez-moi transformer vos projets web grâce à ma passion, ma constance et mon aptitude à apprendre continuellement."
                </p>
            </div>
        </div>
    );
};

// Exportation du composant 'About' afin qu'il puisse être utilisé dans d'autres parties de l'application.
export default About;
