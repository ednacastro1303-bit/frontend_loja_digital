import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body d-flex flex-column align-items-center text-center">
        <Link to={`/product/1`}>
          <img 
            src={image} 
            alt={name} 
            className="mb-3"
            style={{ 
              width: '292px', 
              height: '321px',
              objectFit: 'cover'
            }} 
          />
        </Link>
        <h5 className="text-dark-gray mb-2" style={{ fontSize: '18px', fontWeight: '500' }}>
          <Link to={`/product/1`} className="text-dark-gray text-decoration-none">
            {name}
          </Link>
        </h5>
        <div className="d-flex align-items-center gap-2">
          {priceDiscount ? (
            <>
              <span 
                className="text-light-gray text-decoration-line-through"
                style={{ fontSize: '16px' }}
              >
                {formatCurrency(price)}
              </span>
              <span 
                className="text-dark-gray fw-bold"
                style={{ fontSize: '24px' }}
              >
                {formatCurrency(priceDiscount)}
              </span>
            </>
          ) : (
            <span 
              className="text-dark-gray fw-bold"
              style={{ fontSize: '24px' }}
            >
              {formatCurrency(price)}
            </span>
          )}
        </div>
        <button 
          className="btn btn-primary mt-auto w-100"
          style={{ 
            backgroundColor: '#C92071', 
            borderColor: '#C92071',
            borderRadius: '4px',
            height: '40px'
          }}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
