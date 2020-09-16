# Test-Driven Development Lab

In this lab you'll learn about Test-Driven Development (TDD) by getting some hands-on experience writing code using TDD.

The lab is written in Node.js. This is because JavaScript is a simple, ubiquitous language. You will not need to be an expert in it to complete this lab. However, you must possess some basic familiarity with C-family languages (e.g. Java, JavaScript, C++, Ruby, etc.) and have some programming experience to get the most out of it.

## Prerequisites

### Runtime Environment

You should have Node.js 10.x or above installed, preferably the latest Long-Term Support (LTS) version. At the time of this writing, that is version 12. Get it [here](https://nodejs.org/en/) or use [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) (We strongly recommend using `nvm`).

We're using Node Tap as our test framework. If you're not familiar with it, you should familiarize yourself with the <a href="https://node-tap.org/docs/api/" target="_blank">API</a>.

## Installation

Run:

```sh
npm ci
```

## Usage

Run these commands in your terminal with `npm run <command>` (ex. `npm run start:dev`):

- `lint` - Run the XO linter. This helps us not worry about coding too much so we can focus on learning TDD.
- `lint:fix` - Auto-fix XO lint issues.
- `start:dev` - Run our Express server using `nodemon`. This will refresh the server every time it detects a change to the source code.
- `start` - Run the Express server normally.
- `test` - Run the Node Tap tests.
- `test:watch` - Run the Node Tap tests in watch-mode so that they run every time a change is detected. Warning: you may have to restart this job if you add or delete a file.

You will mostly be using `npm run test`, `npm run test:watch`, and `npm run start:dev`.

### Testing Environment

This lab will be using the popular library <a href="https://node-tap.org/" target="_blank">`Node Tap`</a> along with <a href="https://sinonjs.org/" target="_blank">`Sinon`</a> as our test runner and mocking libraries, respectively.
