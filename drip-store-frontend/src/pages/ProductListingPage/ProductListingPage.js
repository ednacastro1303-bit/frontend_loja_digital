import { useState, useEffect } from 'react';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';

const ProductListingPage = () => {
  const [sortBy, setSortBy] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const filterQuery = urlParams.get('filter');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (filterQuery) {
      searchProducts(filterQuery);
    }
  }, [filterQuery]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const productsData = (await response.json()) || [];
      setFilteredProducts(productsData);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      const mockProducts = [
        { name: 'Tênis Esportivo', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
        { name: 'Camiseta Basic', image: '/product-thumb-2.jpeg', price: 49.9 },
        { name: 'Calça Jeans', image: '/product-thumb-3.jpeg', price: 120, priceDiscount: 99.9 },
        { name: 'Jaqueta de Couro', image: '/product-thumb-4.jpeg', price: 350, priceDiscount: 299.9 },
        { name: 'Relógio Analógico', image: '/product-thumb-5.jpeg', price: 450, priceDiscount: 399.9 },
        { name: 'Mochila Urbana', image: '/product-thumb-1.jpeg', price: 180, priceDiscount: 149.9 },
        { name: 'Tênis Urban', image: '/product-thumb-2.jpeg', price: 220 },
        { name: 'Óculos de Sol', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: 129.9 },
        { name: 'Bermuda Short', image: '/product-thumb-4.jpeg', price: 89.9 },
        { name: 'Vestido Floral', image: '/product-thumb-5.jpeg', price: 199.9, priceDiscount: 149.9 }
      ];
      setFilteredProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/products?search=${query}`);
      const productsData = (await response.json()) || [];
      setFilteredProducts(productsData);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      const mockProducts = [
        { name: `Resultado para: ${query}`, image: '/product-thumb-1.jpeg', price: 100 }
      ];
      setFilteredProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...filteredProducts];
    
    if (value === 'price-asc') {
      sorted.sort((a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price));
    } else if (value === 'price-desc') {
      sorted.sort((a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price));
    }
    
    setFilteredProducts(sorted);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm mb-4" style={{ width: '308px', height: '60px' }}>
            <div className="card-body">
              <label className="form-label text-dark-gray-2 mb-2" style={{ fontSize: '16px' }}>
                Ordenar por
              </label>
              <select 
                className="form-select text-dark-gray-2"
                style={{ border: 'none', boxShadow: 'none', fontSize: '14px' }}
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
              </select>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4" style={{ width: '308px' }}>
            <div className="card-body">
              <h5 className="text-dark-gray-2" style={{ fontSize: '16px', marginBottom: '16px' }}>
                Filtrar por
              </h5>
              <hr className="border border-light-gray-2" style={{ marginBottom: '16px' }} />
              
              <FilterGroup 
                title="Categoria" 
                inputType="checkbox" 
                options={[
                  { text: 'Roupas' },
                  { text: 'Calçados' },
                  { text: 'Acessórios' },
                  { text: 'Eletrônicos' }
                ]}
              />

              <FilterGroup 
                title="Preço" 
                inputType="radio" 
                options={[
                  { text: 'R$ 0,00 a R$ 100,00' },
                  { text: 'R$ 100,00 a R$ 200,00' },
                  { text: 'R$ 200,00 a R$ 500,00' },
                  { text: 'Acima de R$ 500,00' }
                ]}
              />
            </div>
          </div>
        </div>

        <div className="col-md-9">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Carregando...</span>
              </div>
            </div>
          ) : (
            <Section 
              title={`${filteredProducts.length} produtos encontrados`}
              titleAlign="left"
            >
              <ProductListing products={filteredProducts} />
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
