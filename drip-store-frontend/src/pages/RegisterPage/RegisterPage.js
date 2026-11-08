import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (!formData.firstName || !formData.surname) {
      setError('Preencha nome e sobrenome');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: formData.firstName,
          surname: formData.surname,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao cadastrar usuário');
      }

      navigate('/login?registered=true');
    } catch (err) {
      setError(err.message || 'Erro ao cadastrar usuário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '450px' }}>
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="text-center mb-4" style={{ color: '#C92071' }}>Cadastro</h2>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label" style={{ color: '#474747', fontSize: '14px' }}>Nome</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ borderRadius: '4px', border: '1px solid #CCCCCC' }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="surname" className="form-label" style={{ color: '#474747', fontSize: '14px' }}>Sobrenome</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                style={{ borderRadius: '4px', border: '1px solid #CCCCCC' }}
              />
            </div>

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
                minLength={6}
                style={{ borderRadius: '4px', border: '1px solid #CCCCCC' }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label" style={{ color: '#474747', fontSize: '14px' }}>Confirmar Senha</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
                style={{ borderRadius: '4px', border: '1px solid #CCCCCC' }}
              />
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: '#C92071', color: '#FFFFFF', fontWeight: 'bold', borderRadius: '4px', border: 'none' }}
              disabled={loading}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>

          <div className="text-center mt-3">
            <p className="mb-0" style={{ color: '#666666', fontSize: '14px' }}>
              Já tem conta?{' '}
              <a href="/login" style={{ color: '#C92071', textDecoration: 'none' }}>
                Entre aqui
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
