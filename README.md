# Introdução ao CraftBeer

Este repositório é forked do craftbeerpi/craftbeerpi4-ui e tem o objetivo de desenvolver uma versão internacional do software. 

Craftbeerpi4 é uma solução de software de código aberto (https://github.com/craftbeerpi/craftbeerpi4) desenvolvida por Manuel Fritsch para controlar a fabricação de cerveja. O lado do servidor é baseado em python 3 e o front-end em uma interface react/material UI. 

O hardware é focado no RapsberryPi 4, pois esta placa possui muitos GPIOs para ler sensores e controlar atuadores. No entanto, também é possível conectar outros sensores e atuadores via conexão http. Portanto, plugins são necessários.

A interface do usuário tem a opção de definir até 10 painéis diferentes, por exemplo, visualizações separadas de infusão ou fermentação ou para definir uma visualização simples para o seu celular.

Abaixo, você pode ver um painel de exemplo para uma configuração de preparo de um único recipiente.

fig 1

Em um segundo painel, você pode adicionar, por exemplo, seus fermentadores:

fig 2

Abaixo você pode ver um exemplo de um painel que se destina a um telefone celular.

fig3

Você pode criar suas receitas diretamente na interface do usuário,

fig 5

ou você pode importar receitas através de várias outras maneiras, como arquivos beer.xml, o banco de dados 'Kleiner Brauhelfer 2' ou diretamente através da API do aplicativo Brewfather (é necessária uma conta Brewfather paga).

fig 6

Notificações

CraftbeerPi 4 gera notificações em vários eventos. Se você estiver trabalhando, por exemplo, em seu painel e clicar no botão salvar, o servidor informará que o painel foi salvo com sucesso. O servidor também pode gerar mensagens de erro para informar que algo deu errado. 

As notificações também são úteis no caso das etapas de mash, pois informam quando uma etapa é iniciada e, assim que o cronômetro é iniciado, uma mensagem é gerada com o tempo de conclusão previsto da etapa. As notificações também são geradas para alarmes de salto. Eles são exibidos no canto inferior direito da janela do navegador.


# Instalacão do Raspberry Pi4

Instale o Raspberry Pi OS usando o Raspberry Pi Image, ele  é a maneira rápida e fácil de instalar o Raspberry Pi OS e outros sistemas operacionais em um cartão microSD, pronto para uso com seu Raspberry Pi. Maiores informações sobre a instalação no link https://www.raspberrypi.com/software/.

Assista ao nosso vídeo de 45 segundos para saber como instalar um sistema operacional usando o Raspberry Pi Imager.

https://youtu.be/ntaXWS8Lk34

Baixe e instale o Raspberry Pi Imager em um computador com um leitor de cartão SD. Coloque o cartão SD que você usará com seu Raspberry Pi no leitor e execute o Raspberry Pi Imager.

# Como conectar o Display LCD TFT 3.5″ na Raspberry Pi

Com o Display LCD TFT Touch 3.5″ tem-se mais mobilidade com Raspberry Pi, já que ele reúne em uma mesma placa as funções de teclado, mouse e display com resolução de 320×480 pixels. 

Acesse o repositório : https://github.com/goodtft/lcd-show   e  clone este repositorio no Raspberry pi. 

Use o comando SSH to connect the Raspberry Pi, e esteja certo que o Raspberry Pi está conectado à Intenet antes de executar os comandos:

sudo rm -rf LCD-show
git clone https://github.com/goodtft/LCD-show.git
chmod -R 755 LCD-show
cd LCD-show/

Siga as instruções do repositorio para escolher o drive conforme o modelo do TFT escolhido.

# Sensores

Sensores utilizados neste projeto.

# Acesso à CraftBeerPi UI 

1- Acesso local através de um monitor local do raspberry abra o navegador no endereço:

http://localhost:8000/cbpi_ui/static/index.html#

2- Acesso através da mesma LAN que o Raspberry

http://IP_raspberry:8000/cbpi



# Build Web App

npm start 
npm run build

# Install Plugin for Development

python3 setup.py develop

# Package Plugin 

python3 setup.py sdist


# Links Úteis

https://openbrewing.gitbook.io/craftbeerpi4_support/

https://github.com/craftbeerpi/craftbeerpi4

https://openbrewing.gitbook.io/craftbeerpi4_support/readme/plugin-installation#plugin-list 

https://web.brewfather.app/tabs/tools


