import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = ({ onSearch, setSearchQuery, searchQuery }) => {
  const handleSearch = (e) => {
    if (e && e.key === 'Enter') {
      onSearch();
    }
  };

  // Check if user is logged in
  const isLoggedIn = typeof window !== 'undefined' && (localStorage.getItem('authToken') || sessionStorage.getItem('authToken'));
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || '{}') : null;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center">
            <Logo />
          </div>

          <nav className="d-none d-md-flex align-items-center gap-4">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Produtos
            </NavLink>
            <NavLink to="/categories" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Categorias
            </NavLink>
            {isLoggedIn && (
              <NavLink to="/my-orders" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Meus Pedidos
              </NavLink>
            )}
          </nav>

          <div className="d-flex align-items-center gap-3">
            <div className="input-group" style={{ maxWidth: '280px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                style={{ borderRadius: '4px 0 0 4px', borderRight: 'none' }}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={onSearch}
                style={{ borderRadius: '0 4px 4px 0', borderLeft: 'none' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>

            {isLoggedIn ? (
              <div className="d-flex align-items-center gap-2">
                <span className="text-decoration-none" style={{ fontSize: '16px', color: '#474747' }}>
                  {user?.firstName || user?.email || 'Usuário'}
                </span>
                <button 
                  onClick={handleLogout}
                  className="btn"
                  style={{ width: '114px', height: '40px', backgroundColor: '#C92071', borderRadius: '4px', color: '#FFFFFF', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <a href="/register" className="text-decoration-none" style={{ fontSize: '16px', color: '#474747' }}>
                  Cadastre-se
                </a>
                <a href="/login" className="btn" style={{ width: '114px', height: '40px', backgroundColor: '#C92071', borderRadius: '4px', color: '#FFFFFF', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Entrar
                </a>
              </div>
            )}

            <button className="btn p-0" style={{ border: 'none', background: 'none' }}>
              <img src="/mini-cart.svg" alt="Carrinho" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
