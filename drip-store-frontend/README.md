# Drip Store Frontend

Frontend da Drip Store, uma loja virtual construída com React e Bootstrap, seguindo as especificações do README.md do projeto.

## Stack Tecnológica

- **React 18** - Framework JavaScript
- **Bootstrap 5** - Framework CSS
- **React Router DOM 6** - Roteamento
- **Axios** - Cliente HTTP para API
- **CSS3** - Estilização

## Estrutura do Projeto

```
src/
├── components/                # Componentes reutilizáveis
│   ├── Header/               # Cabeçalho da página
│   ├── Footer/               # Rodapé da página
│   ├── Logo/                 # Componente de logo
│   ├── ProductListing/       # Listagem de produtos
│   ├── ProductCard/          # Cartão de produto
│   ├── ProductOptions/       # Opções do produto (tamanho, cor)
│   ├── BuyBox/               # Buy Box com preço e botão comprar
│   ├── Section/              # Seção com título e conteúdo
│   ├── FilterGroup/          # Grupo de filtros
│   └── Gallery/              # Galeria de imagens (slide)
├── pages/                     # Páginas da aplicação
│   ├── Layout/               # Layout (Header + Footer)
│   ├── HomePage/             # Página inicial
│   ├── ProductListingPage/   # Listagem de produtos
│   └── ProductViewPage/      # Visualização de produto
├── services/                  # Serviços de API
│   └── api.js                # Configuração do Axios
├── App.js                     # App principal com rotas
└── index.js                   # Entry point
```

## Variáveis de Ambiente

### Cores do Design System

| Nome | Código Hex |
|------|------------|
| Primary | `#C92071` |
| Secondary | `#B5B6F2` |
| Tertiary | `#991956` |
| Error | `#EE4266` |
| Success | `#52CA76` |
| Warning | `#F6AA1C` |

### Grayscale

| Nome | Código Hex |
|------|------------|
| Dark Gray | `#1F1F1F` |
| Dark Gray 2 | `#474747` |
| Dark Gray 3 | `#666666` |
| Light Gray | `#8F8F8F` |
| Light Gray 2 | `#CCCCCC` |
| Light Gray 3 | `#F5F5F5` |
| White | `#FFFFFF` |

### Variáveis de Configuração

- `REACT_APP_API_URL` - URL da API backend (padrão: `http://localhost:3000/api`)

## Instalação

```bash
cd drip-store-frontend
npm install
```

## Execução em Desenvolvimento

```bash
npm start
```

O app rodará em [http://localhost:3000](http://localhost:3000).

## Build para Produção

```bash
npm run build
```

## Docker

### Build da Imagem

```bash
docker build -t drip-store-frontend .
```

### Executar com Docker

```bash
docker run -p 3000:5000 drip-store-frontend
```

### Executar com Docker Compose

```bash
docker-compose up --build
```

## Rotas

- `/` - Página inicial (Home)
- `/products` - Listagem de produtos
- `/product/:id` - Visualização de produto específico

## APIs Consumidas

### Product API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/products` | Listar todos os produtos |
| GET | `/products/:id` | Obter detalhes de um produto |
| GET | `/products?search=query` | Buscar produtos |
| GET | `/products?category=category` | Filtrar por categoria |

## Compatibilidade com README.md

Este projeto implementa todos os requisitos descritos no README.md:

- Estrutura de pastas (components e pages)
- Layout com Header e Footer
- Componentes: Logo, ProductListing, ProductCard, BuyBox, Section, FilterGroup, ProductOptions, Gallery
- Cores definidas no README
- Design responsivo com Bootstrap
- Integração com API backend
- Docker e Docker Compose configurados
