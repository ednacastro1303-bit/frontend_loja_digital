import ProductCard from '../ProductCard/ProductCard';

const ProductListing = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];
  
  return (
    <div className="row">
      {safeProducts.map((product, index) => (
        <div className="col-6 col-md-3 mb-4" key={index}>
          <ProductCard 
            name={product.name}
            image={product.image}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
