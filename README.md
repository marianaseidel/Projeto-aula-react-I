# Meu Primeiro Projeto com React

Me acompanhe também pelo [Linkedin](http://linkedin.com/in/mariana-seidel-444023193)

## Elementos

Elementos são tags html que retornam de um componente.

## Componentes

Componentes são códigos independentes e reutilizáveis que podem ser funções ou classes, e nesse caso são componentes funcionais.

## Props e Children

Props é um objeto javascript que é passado como parâmetro para o componente. Permite a reutilização dos componentes e a renderização de diferentes dados em cada um deles.

Children é uma propriedade do objeto props, e seu uso permite a alteração de dados entre as tags de fechamento e abertura de um elemento.

## Consumir dados internos

Uso do map:

Ao importar uma estrutura de dados array para ser usada em um componente, foi necessário usar o Map para percorrer cada item do array e trazer os valores dos itens para renderizar na tela. Ou seja, dentro de cada item do array, estão os valores dos itens que serão usados como componenetes do card a ser renderizado na tela, e para que isso aconteça é necessário acessar os itens, mapear e dentro de cada um deles retornar os valores desejados nas tags determinadas.

Key:

Key é a propriedade chave que se constitui como um valor único para cada item que vai renderizar na tela.

# Desafio - aula react I {reprograma}:

Passo a passo:

1. Crie um projeto react
2. Apague as informações default
3. Crie e exporte um arquivo que simula um JSON
4. Crie um componente título que recebe o texto: "Meu Primeiro Projeto React do Zero", a ser renderizado por props ou children
5. Crie um outro componente que mapeia os dados do arquivo que simula o JSON e retorna em elementos que devem ser renderizados na tela. Os dados devem conter 4 chaves e valores: id, nome, descrição e imagem.
6. Import no App.js os componentes criados, perceba os erros/warnings que o terminal/console mostra, resolva e faça todos os componentes renderizar na tela
