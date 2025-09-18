# ⚛️ GitHubMonitor UI

Interface de usuário para a aplicação **GitHubMonitor**, desenvolvida em **Angular** para consumir a **GitHubMonitor API**. Este projeto foi criado para fornecer uma experiência de usuário rica e interativa, permitindo a visualização dos dados de repositórios do GitHub de forma simples e eficiente.

---

### 📝 Visão Geral do Projeto

O **GitHubMonitor UI** é uma aplicação _Single Page Application_ (SPA) construída com **Angular 19**. Ele se conecta à **GitHubMonitor API** para buscar e exibir repositórios de usuários do GitHub. A interface foi projetada para ser limpa, responsiva e de fácil utilização.

Este projeto demonstra:

* ✅ **Boas práticas de desenvolvimento front-end:** Código limpo, componentização e uma estrutura de projeto escalável.
* ✅ **Consumo de APIs RESTful:** Integração com o backend para autenticação e busca de dados.
* ✅ **Interface de usuário moderna:** Construído com as versões mais recentes do Angular e TypeScript.

---

### 💻 Tecnologias Utilizadas

* **Framework:** Angular 19
* **Linguagem:** TypeScript
* **Estilização:** SCSS
* **Gerenciador de Pacotes:** npm
* **Ferramentas de Build:** Angular CLI

---

### ▶️ Instruções de Configuração e Execução

Para rodar o projeto localmente, siga os passos abaixo:

#### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 20.x ou superior)
* [Angular CLI](https://angular.io/cli) (versão 19.x ou superior)
* A **[GitHubMonitor API](https://github.com/marcelogmoura/GitHubMonitor.API)** deve estar em execução.

#### Passos

1.  **Clone o Repositório:**

    ```bash
    git clone [URL-DO-SEU-REPOSITORIO-FRONTEND]
    cd githubmonitor_front
    ```

2.  **Instale as Dependências:**

    ```bash
    npm install
    ```

3.  **Execute o Servidor de Desenvolvimento:**

    ```bash
    ng serve
    ```

    A aplicação estará disponível em `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

---

### 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

* `ng serve`: Inicia o servidor de desenvolvimento.
* `ng build`: Compila o projeto para produção. Os artefatos de build serão armazenados no diretório `dist/`.
* `ng test`: Executa os testes de unidade via [Karma](https://karma-runner.github.io).
* `ng watch`: Compila o projeto em modo de desenvolvimento e observa as alterações nos arquivos.

---

### ✨ Próximos Passos (Sugestões)

* **Componentização da Interface:** Criar componentes para a tela de login, listagem de repositórios e detalhes do repositório.
* **Criação de Serviços:** Implementar serviços para encapsular a lógica de comunicação com a API.
* **Gerenciamento de Estado:** Utilizar soluções como RxJS com Services ou bibliotecas como NgRx ou Akita para gerenciar o estado da aplicação.
* **Autenticação e Proteção de Rotas:** Implementar um fluxo de login que armazena o token JWT e o utiliza para proteger rotas.

---

**Autor:** Marcelo Moura

**Contato:**

📧 **Email:** mgmoura@gmail.com

🔗 **LinkedIn:** https://www.linkedin.com/in/marcelogmoura/