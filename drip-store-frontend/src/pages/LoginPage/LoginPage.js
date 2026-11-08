import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get('registered') === 'true') {
      setError('');
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Preencha todos os campos');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/v1/user/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Credenciais inválidas');
      }

      if (data.token) {
        if (rememberMe) {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          sessionStorage.setItem('authToken', data.token);
          sessionStorage.setItem('user', JSON.stringify(data.user));
        }
      }

      navigate('/');
    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '450px' }}>
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="text-center mb-4" style={{ color: '#C92071' }}>Entrar</h2>
          
          {searchParams.get('registered') === 'true' && (
            <div className="alert alert-success" role="alert" style={{ borderRadius: '4px', border: 'none' }}>
              Cadastro realizado com sucesso! Faça seu login agora.
            </div>
          )}

          {error && (
            <div className="alert alert-danger" role="alert" style={{ borderRadius: '4px', border: 'none' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#474747', fontSize: '14px' }}>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ borderRadius: '4px', border: '1px solid #CCCCCC' }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#474747', fontSize: '14px' }}>Senha</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ borderRadius: '4px', border: '1px solid #CCCCCC' }}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ width: '18px', height: '18px', borderRadius: '4px', border: '1px solid #CCCCCC' }}
              />
              <label className="form-check-label" htmlFor="rememberMe" style={{ color: '#666666', fontSize: '14px' }}>
                Lembrar de mim
              </label>
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: '#C92071', color: '#FFFFFF', fontWeight: 'bold', borderRadius: '4px', border: 'none' }}
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="text-center mt-3">
            <p className="mb-0" style={{ color: '#666666', fontSize: '14px' }}>
              Não tem conta?{' '}
              <a href="/register" style={{ color: '#C92071', textDecoration: 'none' }}>
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
