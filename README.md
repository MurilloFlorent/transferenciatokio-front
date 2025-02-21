# Transferencia Tokio - Frontend

Este é o repositório do frontend do projeto **Transferencia Tokio**, uma aplicação web desenvolvida com Vue.js e Tailwind CSS.

## Tecnologias Utilizadas

- **Vue.js**: Framework progressivo para construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápido.
- **Tailwind CSS**: Framework de estilização baseado em utilitários.
- **Axios**: Cliente HTTP para interação com APIs.

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/MurilloFlorent/transferenciatokio-front
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd transferenciatokio-front
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Execução do Projeto

Para rodar o projeto localmente, utilize:

```sh
npm run dev
```

O servidor será iniciado e você poderá acessar a aplicação no navegador.

## Tailwind

Escolhi usar o Tailwind para facilitar a estilização do projeto.

## Axios

Utilizei o Axios na comunicação com o back-end do projeto. Em `src/services/` é encontrado o arquivo com as chamadas para os endpoints no backend.

## Componentes

Separei o projeto em quatro componentes:
- **Card**: Componente pai.
- **Form** e **List**: Componentes que aparecem conforme solicitado no componente pai.
- **Alert**: Utilizado para comunicação com o backend.

