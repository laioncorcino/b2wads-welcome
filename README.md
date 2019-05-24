# NodeJS Boilerplate

Esse repositório representa a esturura padrão para projetos NodeJS. Aqui estarão descritas as regras para escrita e estruturação do código dentro do projeto.


# Nomenclatura

A nomenclatura segue as seguintes regras:

 - Arquivos: Nome minpusculo separado por `-`. `nome-de-arquivo.js`.
 - Código: [CamelCase](https://pt.wikipedia.org/wiki/CamelCase). `minhaVariavel`.
 - Objetos JSON: Nome das chaves em [snake_case](https://en.wikipedia.org/wiki/Snake_case).
    ```
      {
        "campo_com_multiplas_palavras": "valor"
      }
    ```

# Versão do Node

Usaremos sempre a versão mais atual e que seja [LTS](https://nodejs.org/en/about/releases/).


# O que está incluído nesse boilerplate

 - Formatter, usando o [Prettier](https://prettier.io/)
 - `.gitignore` para NodeJS
 - Config para CircleCI
 - Bootstrap do newrelic (futuro)
 - Ativação de endpoint de métricas básicas para Prometheus (futuro)
 - `package.json` ja pré populado com alguns pacotes e scripts.



# CircleCI

A configuração do Circle já faz o seguinte:

 - Roda os testes;
 - Gera o relatório de cobertura;
 - Checa a formatação do código;
 - Faz upload doa dados de cobertura para o codecov;
 - Roda os testes em uma versão futura do NodeJS;

# Package.json

## Pacotes já incluídos

 - nyc
 - codecov
 - express

## Scripts já configurados

 - test:unit
 - test:all
 - codecov
 - start:web
 - start:worker-*
