import React from 'react';

const Logo = () => {
  return (
    <div>
      <img 
        src="/logo-header.svg" 
        alt="Drip Store" 
        style={{ 
          width: '253px', 
          height: '44px',
          objectFit: 'contain'
        }} 
      />
    </div>
  );
};

export default Logo;
