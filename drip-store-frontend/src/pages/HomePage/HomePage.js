import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

const HomePage = () => {
  const homeImages = [
    { src: '/home-slide-1.jpeg' },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
    { src: '/home-slide-4.jpeg' },
    { src: '/home-slide-5.jpeg' },
    { src: '/home-slide-6.jpeg' },
    { src: '/home-slide-7.jpeg' },
    { src: '/home-slide-8.jpeg' }
  ];

  const collectionImages = [
    '/collection-1.png',
    '/collection-2.png',
    '/collection-3.png'
  ];

  const featuredProducts = [
    { name: 'Tênis Esportivo', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
    { name: 'Camiseta Basic', image: '/product-thumb-2.jpeg', price: 49.9 },
    { name: 'Calça Jeans', image: '/product-thumb-3.jpeg', price: 120, priceDiscount: 99.9 },
    { name: 'Jaqueta de Couro', image: '/product-thumb-4.jpeg', price: 350, priceDiscount: 299.9 },
    { name: 'Relógio Analógico', image: '/product-thumb-5.jpeg', price: 450, priceDiscount: 399.9 },
    { name: 'Mochila Urbana', image: '/product-thumb-1.jpeg', price: 180, priceDiscount: 149.9 },
    { name: 'Tênis Urban', image: '/product-thumb-2.jpeg', price: 220 },
    { name: 'Óculos de Sol', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: 129.9 }
  ];

  return (
    <div>
      {/* Slide de Imagens */}
      <div className="mb-5">
        <Gallery 
          images={homeImages}
          width="1440"
          height="681"
        />
      </div>

      {/* Coleções em Destaque */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="row g-4">
          {collectionImages.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div 
                className="card border-0"
                style={{ borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}
              >
                <img src={image} className="card-img-top" alt={`Collection ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Produtos em Alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={featuredProducts} />
      </Section>
    </div>
  );
};

export default HomePage;
