# Pitty Finder

# Descrição
Pitty Finder é um projeto de front-end para uma página de adoção de animais que conecta abrigos e ONGs de todo o brasil. Com ele, você pode encontrar diversos animais para adoção, além de contribuir com o funcionamento dos nossos abrigos afiliados por meio de doações e serviços voluntários

# Tecnologias
- React.js
- Node.js
- Material UI
- Typescript

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/LeonardoCaml/Pitty-Finder.git

2. Instale as dependências:
   ```bash
   npm install

3. Inicie o projeto:
   ```bash
   npm run dev

# Estrutura do projeto

- `src/:` Código fonte do projeto
- `routes/:` Contém as rotas principais do projeto (home, search pages, current pages e etc.)
- `assets/:` Contém todas as fotos e arquivos de mídia do projeto
- `public/:` Arquivos estáticos
- `databases/:` Base de dados utilizados para simular um banco de dados
- `constants/:` Icones, fotos e outros elementos em forma de variável exportável 
- `components/:` Carrega todos os componentes do site em diferentes escalas

# Dependências Principais

Aqui estão as principais dependências do projeto que serão instaladas ao rodar `npm install` ou `yarn install`:

`react` - Biblioteca para construir interfaces de usuário.
`react-dom` - Conecta o React com o DOM.
`react-router-dom` - Para gerenciar navegação no React.
`Material UI` - Biblioteca de componentes React.

Essas dependências são essenciais para rodar o projeto corretamente.

# Dependências de Desenvolvimento

Além das dependências principais, o projeto também possui dependências de desenvolvimento, como:

`eslint` - Ferramenta para análise estática de código.
`webpack` - Empacotador de módulos.
`babel` - Transpiler para JavaScript moderno.

Essas dependências são usadas apenas durante o desenvolvimento e não são necessárias para rodar o aplicativo em produção.

### Como pegar as dependências principais para listar:

- Se você está usando o **npm**, execute:
  ```bash
  npm list --depth=0

Isso mostrará as dependências principais no seu projeto.

Se você está usando o yarn, execute:
    ```bash
    yarn list --depth=0