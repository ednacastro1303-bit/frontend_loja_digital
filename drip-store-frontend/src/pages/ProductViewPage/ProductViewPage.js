import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      // Mock data fallback
      setProduct({
        name: 'Tênis Esportivo Premium',
        reference: 'TS-2024-PRE',
        stars: 4.5,
        rating: 128,
        price: 299.9,
        priceDiscount: 199.9,
        description: 'Este tênis esportivo premium oferece conforto e durabilidade para suas atividades físicas. Com design moderno e tecnologia de amortecimento avançada, ele é perfeito para corridas e treinos. O material resistente garante longa vida útil.',
        images: [
          { src: '/produc-image-1.jpeg' },
          { src: '/produc-image-2.jpeg' },
          { src: '/produc-image-3.jpeg' },
          { src: '/produc-image-4.jpeg' },
          { src: '/produc-image-5.jpeg' }
        ]
      });
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const recommendedProducts = [
    { name: 'Tênis Esportivo', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
    { name: 'Camiseta Basic', image: '/product-thumb-2.jpeg', price: 49.9 },
    { name: 'Calça Jeans', image: '/product-thumb-3.jpeg', price: 120, priceDiscount: 99.9 },
    { name: 'Jaqueta de Couro', image: '/product-thumb-4.jpeg', price: 350, priceDiscount: 299.9 }
  ];

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="container py-4">
      <div className="row">
        {/* Galeria de Imagens */}
        <div className="col-md-6 mb-4">
          <Gallery 
            images={product.images || []}
            showThumbs
            width="700"
            height="570"
            radius="4px"
          />
        </div>

        {/* Buy Box */}
        <div className="col-md-6">
          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <ProductOptions 
              options={['39', '40', '41', '42', '43', '44', '45']}
              radius="4px"
              shape="square"
              type="text"
            />
            <div className="mt-3">
              <ProductOptions 
                options={['#000000', '#FFFFFF', '#8B4513']}
                shape="circle"
                type="color"
              />
            </div>
          </BuyBox>
        </div>
      </div>

      {/* Produtos Recomendados */}
      <Section 
        title="Produtos recomendados"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
  );
};

export default ProductViewPage;
