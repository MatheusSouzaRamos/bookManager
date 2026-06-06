# bookManager

Sistema de gerenciamento de empréstimos para biblioteca desenvolvido com backend em Java utilizando o framework Spring Boot, frontend em HTML, CSS e JavaScript, e banco de dados PostgreSQL.

## Funcionalidades

### Gerenciamento de Clientes

* Cadastro de clientes.
* Edição de informações dos clientes.
* Exclusão de clientes.
* Listagem completa de clientes cadastrados.

### Gerenciamento de Livros

* Cadastro de livros.
* Edição de informações dos livros.
* Exclusão de livros.
* Controle de disponibilidade dos exemplares.

### Controle de Empréstimos

* Registro de empréstimos de livros para clientes.
* Controle de devoluções.
* Atualização automática da disponibilidade dos livros.
* Consulta dos empréstimos realizados.

## Tecnologias Utilizadas

* Java
* Spring Boot
* PostgreSQL
* HTML
* CSS
* JavaScript

## Como Executar

### 1. Clonar o Projeto

```bash
git clone https://github.com/MatheusSouzaRamos/bookManager.git
```

### 2. Configurar o Banco de Dados

Crie um banco PostgreSQL:

```sql
CREATE DATABASE livros;
```

Configure o arquivo `application.properties` com seu usuário e senha do PostgreSQL.

Exemplo:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/livros
spring.datasource.username=postgres
spring.datasource.password=postgres
```

### 3. Executar o Backend

Execute a aplicação Spring Boot pela sua IDE ou utilizando:

```bash
mvn spring-boot:run
```

### 4. Executar o Frontend

Abra o arquivo principal HTML no navegador ou utilize a extensão Live Server.

## Estrutura do Sistema

* Cadastro e gerenciamento de clientes.
* Cadastro e gerenciamento de livros.
* Registro e controle de empréstimos.
* Integração frontend/backend através de requisições Fetch JavaScript.

## Imagens

Imagens e capturas de tela do sistema estão disponíveis na pasta do projeto.
