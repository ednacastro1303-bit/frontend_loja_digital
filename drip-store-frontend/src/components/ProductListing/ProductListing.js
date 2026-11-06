import ProductCard from '../ProductCard/ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div className="row">
      {products.map((product, index) => (
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
