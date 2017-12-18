## Como criar abas dinamicas com o Angular?

Neste artigo irei mostrar como construir, de uma forma simples e rápida,  abas dinamicas dentro da sua SPA com o Angular 4. Isso surgui com uma necessidade no trabalho e depois de tanto quebrar a cabeça procurando uma forma de fazer, trago uma forma de fazer pra vocês.

## Qual é a diferença em utilizar o component Router Link do Angular?
Nesse componente, todo o conteúdo é renderizando dentro da tag <router-outlet></router-outlet>, porém para criar o novo componente, ele destrói o ultimo compoenent renderizado. Vai um lembrete, isso não é um bug, bem pelo contrário, o RouterLink foi contruído para esse fim.
Como eu precisava que o o componente não fosse destruído, eu substituo o component RouterLink por um outro component do angular, ComponentFactoryResolver, onde esse irá me devolver uma nova instância de um componente escolhido, nisso basta renderizar ele dentro de uma div especifica.
 
## Ta e agora, consigo criar novos componentes sem destruir os antigos, e no que isso me ajuda?
A ideia é dar umcd  “hide” nos componentes que eu não quero que apareçam e um “show” no compomente escolhido, para isso utilizei o atributo do html “hidden”. Com isso está criada uma forma de mostar apenas o conteúdo da aba que está selecionada, mas por “baixo dos panos” todo o conteúdo está ali renderizado, porém escondido.

## Run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
