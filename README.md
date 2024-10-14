# Micro-Frontend (MFE) DEMO

### Dependências

Para executar o projeto as seguintes dependências precisam estar instaladas.

- node 20 (ou maior)
- npm 10 (ou maior)

### Dependências opcionais

 - [just](https://github.com/casey/just)
 - [docker](https://github.com/docker)


### Executando o projeto

#### com dependências opcionais 

A forma mais simples de executar o projeto é com [docker](#dependências-opcionais)

```sh
docker compose up
```
#### sem as dependências opcionais

Você precisará de 4 terminais abertos, um para cada micro-frontend

```bash
# 1º terminal
cd producers/header-mfe/
npm install
npm start

# 2º terminal
cd producers/cards-mfe/
npm install
npm start

# 3º terminal
cd producers/footer-mfe/
npm install
npm start

# 4º terminal (shell app)
cd shell
npm install
npm start
```

Acesso pelo seu navegador no endereço:

    http://localhost:3000

**Screenshot página:**

![NatyShop Screenshot](./docs/imgs/naty-shop-mfe-home.png)

### Executando os testes
#### com dependências opcionais 

```sh
just test
```
**Screenshot dos testes**

![Resultado dos testes unitários](./docs/imgs/just-test-output.png)

### sem as dependências opcionais

```bash
cd producers/header-mfe/
npm test

# 2º terminal
cd producers/cards-mfe/
npm test
```
