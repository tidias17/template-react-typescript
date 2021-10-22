# Template base Front React + Typescript

Projeto de template base destinado a criações de aplicações front-end, considerando área comum e área logada.

### Stack

|       Ferramentas       | Descrição                             |
| :---------------------: | ------------------------------------- |
|        **React**        | React Framework v16.13.1              |
|        **Hooks**        | Trabalhando com estados               |
|       **Context**       | Contexto para armazenamento geral     |
|      **Typescript**     | Utilizando tipagem no Javascript      |
|  **Styld Components**   | Componentes estilizados em javascript |
|     **React Query**     | Biblioteca gerenciamento de requests  |
|     **Material UI**     | Biblioteca de componentes React       |
| **Mock Service Worker** | Interceptador de requests localhost   |

### Rodando o projeto localmente

1. Clone o projeto `git clone https://github.com/tidias17/template-react-typescript` em um diretório de sua preferência;
2. No diretório principal do projeto, para instalar as dependências listadas em package.json, deverá ser executado o comando `npm i`. Para isso, será necessário ter acesso à rede do edifício ifood, localmente ou via VPN;
3. Execute o comando `npx msw init public` para configurar o Mock Service Worker. Feito isso, o arquivo `mockServiceWorker.js` será adicionado a pasta `public` e será possível interceptar as requisições durante o desenvolvimento.
4. Para iniciar a aplicação front-end, é necessário que no diretório principal deste repositório, execute o comando `npm start`. Este será disponibilizado na rota http://localhost:3023.