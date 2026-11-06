import React, { useState } from 'react';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="d-flex flex-wrap gap-2" style={{ marginTop: '10px' }}>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => handleOptionClick(option)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: shape === 'square' ? '46px' : '31px',
            height: shape === 'square' ? '46px' : '31px',
            borderRadius: shape === 'square' ? (radius || '0') : '50%',
            border: `1px solid #CCCCCC`,
            cursor: 'pointer',
            backgroundColor: type === 'color' ? option : 'transparent',
            borderColor: selectedOption === option ? '#C92071' : '#CCCCCC',
            borderWidth: '2px',
            color: type === 'text' ? '#474747' : 'transparent',
            fontSize: type === 'text' ? '24px' : '14px'
          }}
        >
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
