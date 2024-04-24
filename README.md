# Angular Parser Web Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Description
This web application serves as the frontend for the Node.js Synonyms API. It provides a user interface for the functionality of finding and counting synonyms for each word in a given text. If a word appears multiple times, it does not increase the synonym count. Words that are synonyms of a previous one are not considered as a new entry but added to the count of a previous word. The words "a", "the", "and", "of", "in", "be", "also", "as" are excluded.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
