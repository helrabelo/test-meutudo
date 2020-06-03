## Como Rodar o projeto:

O projeto foi feito em cima do NextJS, para que ele funcione na sua máquina, basta clonar o projeto e rodar

```bash
yarn dev
#ou, se preferir,
npx next dev
```

-

O projeto estará acessível via [https://localhost:3000]

## Sobre o projeto:

Uma landing page básica contendo informações sobre o COVID-19, além de um componente reativo com dados atualizados sobre a doença.

## Desenvolvimento

# 1 - First Steps

Foi feito o boilerplate do projeto, instalando o Next/React

# 2 - Organizando pastas bases

Criação das pastas _static_ para inserir os assets de css/js e _components_ para dividir as seções do site em arquivos individuais.

Optei por essa estratégia pelo seguinte motivo:

Geralmente empresas tem websites bastante completos e por muitas vezes seções costumam ser "repetidas" (ao menos em termos de estrutura de html) e, para evitar código duplicado, optei por já manter desde o início uma estrutura componentizada

# 3 - Desenvolvimento de HTML/CSS

O CSS do projeto foi inteiramente desenvolvido à mão, tanto pelo meu nato desprezo por frameworks de CSS, tanto para ilustrar que tenho a competência.

Apesar de não estar usando nenhum pré-processador, organizei os arquivos de modo que a transição para um SASS/LESS seja mais simples, uma vez que cada compoenente já tem seu próprio arquivo de CSS

Confesso que não pesquisei se a organização dessa forma atende as boas práticas do Next

_SEMPRE QUE VER UMA BOLA LARANJA NO PROJETO É UMA SUBSTITUIÇÃO DE UMA IMAGEM_

# 4 - Componente Reativo / API

Para atualizar os dados da doença, utilizei a API _https://covid19api.com/_ como fonte de dados e a lib Axios para consumo dos dados.
