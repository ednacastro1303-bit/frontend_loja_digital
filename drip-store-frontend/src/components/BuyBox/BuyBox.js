import React from 'react';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="mt-4">
      <h2 className="text-dark-gray mb-2" style={{ fontSize: '32px' }}>
        {name}
      </h2>
      <p className="text-dark-gray-3 mb-3" style={{ fontSize: '12px' }}>
        Referência: {reference}
      </p>
      
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="badge" style={{ backgroundColor: '#F6AA1C', borderRadius: '4px' }}>
          <span className="me-1">{stars}</span>
          <img src="/star-icon.svg" alt="Estrela" style={{ width: '14px', height: '14px' }} />
        </span>
        <span className="text-light-gray" style={{ fontSize: '14px' }}>
          ({rating} avaliações)
        </span>
      </div>

      <div className="d-flex align-items-center gap-3 mb-4">
        {priceDiscount ? (
          <>
            <span className="text-light-gray-2 text-decoration-line-through" style={{ fontSize: '16px' }}>
              {formatCurrency(price)}
            </span>
            <span className="text-dark-gray fw-bold" style={{ fontSize: '32px' }}>
              {formatCurrency(priceDiscount)}
            </span>
          </>
        ) : (
          <span className="text-dark-gray fw-bold" style={{ fontSize: '32px' }}>
            {formatCurrency(price)}
          </span>
        )}
      </div>

      <p className="text-dark-gray" style={{ fontSize: '14px', lineHeight: '1.6' }}>
        {description}
      </p>

      {children && (
        <div className="mb-4">
          {children}
        </div>
      )}

      <button 
        className="btn w-100"
        style={{ backgroundColor: '#F6AA1C', color: '#FFFFFF', fontSize: '16px', fontWeight: 'bold', borderRadius: '4px', height: '50px' }}
      >
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;
