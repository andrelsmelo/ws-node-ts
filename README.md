# Chat WebSocket com Node.js e TypeScript

Este é um projeto de chat WebSocket desenvolvido em Node.js utilizando TypeScript. Ele inclui recursos de autenticação, autorização, administração de sessão e muito mais. A aplicação é executada em contêineres Docker e utiliza Redis para armazenamento de sessão, PostgreSQL como banco de dados principal e RabbitMQ para troca de mensagens.

## Requisitos

- Node.js
- Docker
- Docker Compose

## Configuração do Ambiente de Desenvolvimento

1. Clone este repositório:

   ```bash
   git clone git@github.com:andrelsmelo/ws-node-ts.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-projeto
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Execute o ambiente Docker:

   ```bash
   docker-compose up -d
   ```

5. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Funcionalidades Principais

- **Autenticação e Autorização**: Os usuários podem se registrar e fazer login com autenticação JWT. A autorização é aplicada para acessar recursos específicos.
- **Chat WebSocket**: Permite a troca de mensagens em tempo real entre os usuários, com suporte para salas de chat públicas e privadas.
- **Administração de Sessão**: Gerencia o estado da sessão do usuário e lida com reconexões automáticas.

## Melhorias Futuras

- **Criptografia de Ponta a Ponta**: Adicionar camada de criptografia para garantir a segurança das mensagens.
- **Notificações em Tempo Real**: Implementar sistema de notificações para novas mensagens e eventos importantes.
- **Integração com APIs de Terceiros**: Explorar e integrar APIs externas para expandir funcionalidades.
- **Análise de Sentimento**: Implementar ferramentas de análise de sentimento para detectar linguagem abusiva.
- **Suporte Multilíngue**: Adicionar suporte para tradução de mensagens em diferentes idiomas.

## Documentação

- Documentação do código está disponível nos comentários do código fonte.
- Consulte o arquivo TODO.md para uma lista detalhada de tarefas e melhorias.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto! Abra uma issue para reportar problemas ou sugira melhorias através de pull requests.

## Licença

Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
