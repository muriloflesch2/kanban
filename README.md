## Comentários Arquiteturais
1) ENUMS --> O Projeto utiliza ENUMS para os tipos de colunas, garatindo que todas as referencias para estes dados se ancorem neste ENUM.

2) MODELS --> O Projeto utiliza interfaces como MODELOS para facilitar e dar mais segurança na troca de dados com a API.

3) MODULO PAGES --> Modulo exclusivo para páginas. Páginas concentram um conjunto de componentes que representam uma visualição com funcionalidades especifícas, muitas vezes com rotas específicas.

4) MODULO SHARED --> Como o projeto possui apenas uma página, ao invés de concentrar os componentes dentro de uma pasta chamada componentes, resolvi criar todos os componentes dentro da pasta/módulo SHARED, partindo do ponto de vista em que as outras hipotéticas páginas tambem seriam um gafico Kanbam com funcionalidades parecidas, aproveitando colunas, cards e todos os outros elementos.

5) SERVICE ÚNICO --> O projeto possui apenas um único serviçe. Essa decisão foi tomada mais por uma questão de tempo pois o cenário ideal seria dividir responsabilidades de uma forma um pouco mais específica, criando por exemplo, um service chamado api.service (com as chamadas de api) e outro kanban.service (como um singleton, que concentra propriedades e metodos acessiveis por qualquer componente do projeto).

6) LAZYLOAD NA ROTA  --> Coom boa pratica, visando manter os modulos da aplicação sendo carregados por demanda, foi implemantado um lazyload na unica rota do projeto.

7) TRATAMENTO DE ERROS --> Devido ao tempo foi implementado em todas chamadas da api um tratamento geral para os erros da api, chamando o mesmo modal de aviso no FRONT para todos os casos.

7) NGLINT -> O projeto passou sem erros no comando ng lint

## Referencias
1) Tema    --> https://material.angular.io
2) Markdown --> https://github.com/tkp1n/md2html

## Funcionalidades que não foram implementadas por causa do tempo. 
 1) Testes Unitários
 2) Docker