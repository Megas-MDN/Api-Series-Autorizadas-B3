# API Series Autorizadas

xxxx.xx xx xx xxxxx xxxxx xx xxxx xxxxx xxxx xxxxx xxx xx xxxxx.

Link do query maker da aplicação: [demo api](https://api-series-autorizadas-b3.up.railway.app/)
Endpoint para requisitar os dados: [/search?](https://api-series-autorizadas-b3.up.railway.app/search?);
Endpoint para pegar o link fonte que alimenta a base: [/source](https://api-series-autorizadas-b3.up.railway.app/source);

<hr>

## Fluxo da aplicação

![ScreenShot](https://i.imgur.com/BA39ey3.png)

<hr>

## 🧐 Features

Funcionalidades implementadas na API:

- **Download de arquivo .zip**

- **Descompactação do .zip**

- **Transformação do arquivo .txt em um arquivo .json formatado**

- **Inserção dos dados do arquivo .json no banco de dados**

- **Disponibilização dos dados pelo endpoint**

- **Mais de 10 Query Parameters para filtragem**

- **As Query Parameters podem ser combinadas para refinar a filtragem** (GitHub Action)

- **Query Maker para facilitar a construção da query** (GitHub Action)

<hr>

## 🛠️ Instalando o projeto

1. Clonar o repositório

```bash
git clone https://github.com/Megas-MDN/Api-Series-Autorizadas-B3.git
```

2. Entre na pasta clonada

```bash
cd Api-Series-Autorizadas-B3
```

3. Instalar as dependências

```bash
npm install
```

4. Para rodar em modo de produção

```bash
npm start
```

5. Para rodar em modo de desenvolvimento

```bash
npm run dev
```

<hr>

## 📦 Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`USER_DB`=usuario_banco_de_dados

`PASS_DB`=senha_banco_de_dadoss

`HASH_ATT`=hash_para_atualizar_os_dados

`URL_SOURCE`=url_b3_link_direto

🌟 Pronto para usar!

<hr>

## 📚 Documentação da API

#### Retorna todos os itens em ordem alfabética com o limit de 20 elementos.

```http
  GET /search?
```

<details>
  <summary><strong>📝 Exemplo de resposta</strong></summary><br />

```json
{
  "series": [
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPH900",
      "tipoDerivativo": "Americano",
      "strike": 90,
      "vencimento": "2023-08-18T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPT900",
      "tipoDerivativo": "Europeu",
      "strike": 90,
      "vencimento": "2023-08-18T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPF884",
      "tipoDerivativo": "Europeu",
      "strike": 88.4,
      "vencimento": "2023-06-16T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPR884",
      "tipoDerivativo": "Europeu",
      "strike": 88.4,
      "vencimento": "2023-06-16T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPQ210",
      "tipoDerivativo": "Europeu",
      "strike": 77.25,
      "vencimento": "2023-05-19T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPE210",
      "tipoDerivativo": "Americano",
      "strike": 77.25,
      "vencimento": "2023-05-19T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPP675",
      "tipoDerivativo": "Europeu",
      "strike": 67.5,
      "vencimento": "2023-04-20T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPD675",
      "tipoDerivativo": "Europeu",
      "strike": 67.5,
      "vencimento": "2023-04-20T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPT670",
      "tipoDerivativo": "Europeu",
      "strike": 67,
      "vencimento": "2023-08-18T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPH670",
      "tipoDerivativo": "Americano",
      "strike": 67,
      "vencimento": "2023-08-18T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPD650",
      "tipoDerivativo": "Americano",
      "strike": 65,
      "vencimento": "2023-04-20T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPP650",
      "tipoDerivativo": "Europeu",
      "strike": 65,
      "vencimento": "2023-04-20T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPB650",
      "tipoDerivativo": "Americano",
      "strike": 65,
      "vencimento": "2024-02-16T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPN650",
      "tipoDerivativo": "Europeu",
      "strike": 65,
      "vencimento": "2024-02-16T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPD630",
      "tipoDerivativo": "Americano",
      "strike": 63,
      "vencimento": "2023-04-20T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPP630",
      "tipoDerivativo": "Europeu",
      "strike": 63,
      "vencimento": "2023-04-20T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPF606",
      "tipoDerivativo": "Americano",
      "strike": 60.65,
      "vencimento": "2023-06-16T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPR606",
      "tipoDerivativo": "Europeu",
      "strike": 60.65,
      "vencimento": "2023-06-16T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES VENDA",
      "ticket": "RRRPT600",
      "tipoDerivativo": "Europeu",
      "strike": 60,
      "vencimento": "2023-08-18T00:00:00.000Z"
    },
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "3R PETROLEUM",
      "tipoAtivoPrincipal": "ON NM",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "RRRPH600",
      "tipoDerivativo": "Americano",
      "strike": 60,
      "vencimento": "2023-08-18T00:00:00.000Z"
    }
  ]
}
```

</details>

<hr>

#### As possíveis Query Parameters

```http
  GET /search?opcao=petrf291
```

A query `opcao` tem prioridade máxima sobre os outros filtros.

<details>
  <summary><strong>📝 /search?opcao=codigo_da_opcao</strong></summary><br />

```json
{
  "series": [
    {
      "tipoDaSerie": 2,
      "ativPrincipal": "PETROBRAS",
      "tipoAtivoPrincipal": "PN N2",
      "labelDerivativo": "OPCOES COMPRA",
      "ticket": "PETRF291",
      "tipoDerivativo": "Europeu",
      "strike": 26.05,
      "vencimento": "2023-06-16T00:00:00.000Z"
    }
  ]
}
```

</details>

<hr>

## 🏷️ /search?

ativo= Nome da ação vinculada ao deriavativo

&

tipoVencimentopcao= (americano ou europeu)

&

offset= A partir de um deslocamento de `n` registros

&

limit= Número máximo de elementos

&

tipativo= (ON ou PN)

&

tipoopcao= (Call ou Put)

&

vencimento= Nome do mês do vencimento (ex: setembro)

&

ano= Ano do vencimento (ex: 2023)

&

min= Strike mínimo da filtragem

&

max= Strike máximo da filtragem

<hr>

## 🏷️ /source

<details>
  <summary><strong>📝 Exemplo de resposta </strong></summary><br />

```json
{
  "message": "Source na base de dados.",
  "text": "Lista Completa de Séries Autorizadas",
  "src": "Link direto para download das séries autorizadas na b3",
  "date": "2023-10-06"
}
```

</details>

<hr>

## 🔒️ POST /data

Para esta rota é necessário passar no `body` da requisição e uma chave de autenticação pelo header:

<details>
  <summary><strong>📝 Exemplo da requisição </strong></summary><br />

```json
{
  "body": {
    "src": "link atualizado para o download do .zip na b3"
  },
  "headers": {
    "Authorization": "HASH_ATT"
  }
}
```

</details>

<details>
  <summary><strong>📝 Exemplo de resposta </strong></summary><br />

```json
{
  "message": "Updated!",
  "total": 41622,
  "header": "01|20230406|20230407|00:01:08",
  "randomOption": {
    "tipoDaSerie": 2,
    "ativPrincipal": "DIRECIONAL",
    "tipoAtivoPrincipal": "ON NM",
    "labelDerivativo": "OPCOES COMPRA",
    "ticket": "DIRRD160",
    "tipoDerivativo": "Americano",
    "strike": 16,
    "vencimento": "04/20/2023"
  }
}
```

</details>

<hr>

## 🔧 Query Maker

Para auxiliar na construção das queries a rota [api-series-autorizadas-b3](https://api-series-autorizadas-b3.up.railway.app/) oferece uma interface que possibilita selecionar os filtros.

![query_maker](https://i.imgur.com/g3TxOZs.png)

<hr>

## 💻 Construído com:

- [Node Js](https://nodejs.org/en): Engine
- [Express](https://expressjs.com/pt-br/): Framework api
- [Mongo DB Atlas](https://www.mongodb.com/atlas/database): Para o banco de dados

<hr>
<p align="center">
Developed with ❤️ by Megas
</p>
