import React from 'react';

const Contact = () => {
  const handleClick = () => {
    alert("Numéro de téléphone : (514)-560-6616\nAdresse e-mail : francoisbour83@hotmail.com");
  };

  return (
    <div className="flex items-center justify-center mt-20 mb-20 bg-black">
      <button 
        className="px-20 py-3 text-lg font-bold text-red-500 bg-black border-2 border-white"
        onClick={handleClick}
      >
        Contactez moi
      </button>
    </div>
  );
}

export default Contact;
