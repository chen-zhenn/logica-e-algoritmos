# Lógicas

...

## Algebra

### Matrizes

*  __Diagonais__: :point_right: [Cálculos](src/js/diagonals)
## :electric_plug: Instalação

Como instalar **Node.js**:   

__1.__ Via **NVM** - Node Version Manager, consulte o [repositório](https://github.com/nvm-sh/nvm)   
__2.__ Via instalador (executável), consulte a [documentação](https://nodejs.org/en/download)
 
Como instalar o **Docker**, consulte a [documentação](https://docs.docker.com/get-docker)

### Configurações iniciais

Certifique-se de estar na raiz do diretório **:open_file_folder: logicas/**.  

__1. Instale as dependências__

```
yarn install
```

__2. Habilite os watchers para os assets__

```
yarn watchers
```

__3. Crie a imagem Docker__

```
docker build -t mathematical-algorithms-lab:v1.0 .
```

__4. Crie o container Docker__

```
docker run --name mathematical-algorithms-lab --network host --volume $(pwd):/lab mathematical-algorithms-lab:v1.0
```

__5. Acesse seu browser(navegador) em__: [http://localhost:3000](http://localhost:3000).

### :boom: Boom!
## :video_game: Como usar

__1. Ligue o watcher__

```yarn watchers```

__2. Levante o container__

```docker start mathematical-algorithms-lab```

__3. Acesse Web server__

Em: [http://localhost:3000](http://localhost:3000).

> __Nota__: Servindo em **:open_file_folder: dist/**

__4. Testes__

__comando__: ```yarn test``` ou ```yarn test:watch```