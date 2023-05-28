import React from 'react';
import { socialMedia } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <p> 
          Copyright Ⓒ {currentYear === 2023 ? currentYear : `2023 - ${currentYear}`} François Bourassa. All Rights Reserved.
        </p>
      </div>

      <div style={{display: 'flex'}}>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer  ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
