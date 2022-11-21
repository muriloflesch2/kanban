## Comentários gerais sobre o projeto:

1) ENUMS --> O Projeto utiliza ENUMS para os tipos de colunas, garantindo que todas as referências para estes dados se ancorem neste ENUM.

2) MODELS --> O Projeto utiliza interfaces como MODELOS para facilitar e dar mais segurança na troca de dados com a API.

3) MODULO PAGES --> Módulo exclusivo para páginas. Páginas normalmente concentram  um conjunto de componentes com funcionalidades e objetivos especifícos, muitas vezes vinculadas à rotas específicas.

4) MODULO SHARED --> Como o projeto possui apenas uma página, ao invés de concentrar os componentes dentro de uma pasta chamada componentes, resolvi criar todos os componentes dentro da pasta/módulo SHARED, partindo do ponto de vista em que as outras hipotéticas páginas tambem seriam um gafico Kanbam com funcionalidades parecidas, aproveitando colunas, cards e todos os outros elementos.

5) SERVICE ÚNICO --> O projeto possui apenas um único service. Essa decisão foi tomada por uma questão de tempo disponível para o projeto. O cenário ideal seria dividir responsabilidades de uma forma um pouco mais específica, criando por exemplo, um service chamado api.service (com as chamadas de api) e outro kanban.service (como um singleton, que concentra propriedades e metodos acessiveis por qualquer componente do projeto).

6) LAZYLOAD NA ROTA  --> Como boa prática, visando manter os módulos da aplicação carregados por demanda, foi implemantado um lazyload no módulo carregado na rota default.

7) TRATAMENTO DE ERROS --> Devido ao tempo, implementei em todas as chamadas de api um tratamento geral para os erros, chamando o mesmo modal de aviso no FRONT para todos os casos.

7) NGLINT -> O projeto passou sem erros no comando ng lint

## Referencias
1) Tema    --> https://material.angular.io
2) Markdown --> https://github.com/tkp1n/md2html

## Funcionalidades que não foram implementadas por causa do tempo. 
 1) Testes Unitários
 2) Docker