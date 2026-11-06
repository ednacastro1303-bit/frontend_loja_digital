import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
  const informationLinks1 = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/jobs' },
    { text: 'Política de Privacidade', link: '/privacy' },
    { text: 'Termos de Uso', link: '/terms' }
  ];

  const informationLinks2 = [
    { text: 'Central de Atendimento', link: '/support' },
    { text: 'Fale Conosco', link: '/contact' },
    { text: 'Rastrear Pedido', link: '/track' },
    { text: 'Trocas e Devoluções', link: '/returns' }
  ];

  const informationLinks3 = [
    { text: 'Drip Store', link: '/' },
    { text: 'Cartões de Crédito', link: '/credit-cards' },
    { text: 'Cartões Presente', link: '/gift-cards' },
    { text: 'Drip Store GO', link: '/drip-go' }
  ];

  const InformationBlock = ({ title, informations }) => (
    <div>
      <h5 className="text-white mb-3" style={{ fontSize: '16px', fontWeight: 'bold' }}>{title}</h5>
      <ul className="list-unstyled">
        {informations.map((item, index) => (
          <li key={index} className="mb-2">
            <a href={item.link} className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-dark-gray text-white mt-5" style={{ backgroundColor: '#1F1F1F' }}>
      <div className="container py-5">
        <div className="row">
          {/* Coluna 1: Logo e Descrição */}
          <div className="col-md-4 mb-4">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook.svg" alt="Facebook" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram.svg" alt="Instagram" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter.svg" alt="Twitter" style={{ width: '24px', height: '24px' }} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Informações */}
          <div className="col-md-4 mb-4">
            <InformationBlock title="Informações" informations={informationLinks1} />
          </div>

          {/* Coluna 3: Serviços */}
          <div className="col-md-4 mb-4">
            <InformationBlock title="Serviços" informations={informationLinks2} />
          </div>

          {/* Coluna 4: Outros */}
          <div className="col-md-4 mb-4">
            <InformationBlock title="Outros" informations={informationLinks3} />
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center" style={{ fontSize: '14px' }}>
          <p>© 2026 Digital Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
