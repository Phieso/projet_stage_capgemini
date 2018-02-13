# Afj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

If the command fail, You can use :  `ng generate component component --module app.module.ts`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Deploy local 

- run "ng serve --open" on the terminal to run the front-end (or npm run start)
- run "npm run startDb" to connect the database on a another terminal
- run "npm run startServer" to launch the backEnd on a another terminal


## Requirements
- this project need a setup of MongoDB, (for example : [entreprise](https://www.mongodb.com/lp/download/mongodb-enterprise?jmp=nav))
- require node.js and npm
- for the first time, it is necessary to create the folder "db" at the root of this project. It represents the local database.
- run `npm install` to install all dependencies

## Git / Bitbucket
- You don't have to commit directly in the develop branch. You have to create a sub branch of develop and create a pull request if you want to merge your work in develop. 
- Before to create a pull request, it is necessary to update your branch with develop. For it, you have to : 
    - git checkout develop && git pull
    - git checkout your_branch && git rebase -i develop your_branch
    - resolve conflicts, git add . && git rebase --continue
    - finally, git push -f

- You have to create a tag before a delivery : [git tag](https://git-scm.com/book/fr/v1/Les-bases-de-Git-%C3%89tiquetage)

## Mode mock 
- run "ng serve -o --env=mock" on the terminal to launch the front-end with the mock Mode
or npm run startMock

# projet_stage_capgemini
