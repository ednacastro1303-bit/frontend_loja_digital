import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/products?filter=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div>
      <Header 
        onSearch={navigateToSearch} 
        setSearchQuery={setSearchQuery} 
        searchQuery={searchQuery} 
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
