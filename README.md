# 🚀 Modelo de Projeto Node.js

Este é um modelo base para projetos utilizando Node.js. O objetivo é fornecer uma estrutura inicial organizada para facilitar o desenvolvimento de novas aplicações.

## 🛠 Tecnologias

- Node.js
- Prisma ORM (opcional, caso utilize banco de dados)

## 📦 Como Utilizar

### Configurações Iniciais

Primeiro, você precisa ter o Node.js instalado na sua máquina.

### Rodando o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/111Yokoo/projeto-node-modelo.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd projeto-node-modelo
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as configurações necessárias, como:
     ```env
     PORT=5000
     DB_HOST=localhost
     DB_USER=seu_usuario
     DB_PASS=sua_senha
     DB_NAME=nome_do_banco
     JWT_SECRET=sua_chave_secreta
     ```
5. Se estiver utilizando banco de dados, configure as migrations:
   ```sh
   npx prisma migrate dev --name init
   ```
6. Inicie o servidor:
   ```sh
   npm run dev
   ```
7. A API estará rodando em: [http://localhost:5000](http://localhost:5000)

## 📚 Referências

- [Node.js](https://nodejs.org/)
- [Prisma ORM](https://www.prisma.io/)

---

<p align="center" style="font-size: 20px;"><strong>Projeto desenvolvido como base para novas aplicações!</strong></p>
