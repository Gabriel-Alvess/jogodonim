# Jogo do Nim

Este é um projeto de um jogo em JavaScript chamado "Jogo do Nim".
A aplicação tem a função de proporcionar a experiência do jogo Nim, utilizando das tecnologias HTML, JavaScript e CSS. O maior desafio enfrentado no desenvolvimento do jogo foi a interpretação das funcionalidades do jogo para a criação do mesmo.
O objetivo do jogo é ser o jogador que deixa apenas uma peça na mesa, fazendo com que o outro jogador perca. O jogo começa com 21 peças e em cada rodada um jogador pode remover 1, 2 ou 3 peças, levando em conta o número atual de peças.

O projeto contém um arquivo HTML com a estrutura do jogo, um arquivo CSS para estilização, e um arquivo JavaScript para o funcionamento do jogo.

# Regras do jogo
consute [REGRAS](./REGRAS.md)

# Como funciona
O jogo é iniciado com 21 peças na mesa. O jogador da vez escolhe quantas peças quer remover (1, 2 ou 3), e o número de peças restantes na mesa é atualizado. O próximo jogador então escolhe quantas peças quer remover, e assim por diante, até que apenas uma peça reste na mesa. O jogador que deixar apenas uma peça na mesa é o vencedor.

No projeto, há uma interface gráfica com a mesa de jogo, botões para os jogadores escolherem quantas peças remover, um botão para reiniciar o jogo e uma área para exibir mensagens.

# Como jogar
Clique nos botões de -1, -2 ou -3 para remover peças da mesa.
O jogador que deixar apenas uma peça na mesa vence o jogo.
Clique no botão "Reiniciar" para começar um novo jogo.

# Referências
[Game of Nim](https://happycoding.io/tutorials/javascript/if-statements/game-of-nim)
[Wikipedia Nim](https://en.wikipedia.org/wiki/Nim)

# Dificuldades
compreender o código e extender as funcionalidades

# Propriedades adicionais
O projeto utiliza a biblioteca Bootstrap para estilização e layout responsivo da página. Também é utilizado JavaScript para fazer a lógica do jogo, como a atualização do número de peças na mesa, a verificação do vencedor e a troca de jogador. A página contém mensagens que são exibidas para informar ao jogador sobre as ações realizadas, como a quantidade de peças removidas e qual jogador está jogando.

# Como executar o jogo
Basta abrir o arquivo HTML em um navegador web para executar o jogo. É recomendável utilizar um navegador atualizado e com suporte para as tecnologias utilizadas no projeto (HTML, CSS e JavaScript).

[Ou jogue aqui](https://gabrieljogodonim.netlify.app)
