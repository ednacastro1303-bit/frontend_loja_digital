import React from 'react';
import Section from '../../components/Section/Section';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const categories = [
    { name: 'Roupas', image: '/collection-1.png', count: 120 },
    { name: 'Calçados', image: '/collection-2.png', count: 85 },
    { name: 'Acessórios', image: '/collection-3.png', count: 64 },
    { name: 'Eletrônicos', image: '/collection-1.png', count: 42 },
    { name: 'Esporte', image: '/collection-2.png', count: 58 },
    { name: 'Moda praia', image: '/collection-3.png', count: 35 }
  ];

  return (
    <div className="container py-4">
      <Section title="Categorias" titleAlign="center">
        <div className="row g-4">
          {categories.map((category, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <Link to={`/products?category=${encodeURIComponent(category.name)}`}>
                <div 
                  className="card border-0 shadow-sm h-100"
                  style={{ borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={category.image} 
                      className="card-img-top" 
                      alt={category.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="text-dark-gray mb-1" style={{ fontSize: '16px' }}>
                      {category.name}
                    </h5>
                    <p className="text-light-gray mb-0" style={{ fontSize: '14px' }}>
                      {category.count} produtos
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default CategoriesPage;
