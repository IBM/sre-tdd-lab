# Test-Driven Development Lab

## Introduction

Welcome! In this lab you'll learn about Test-Driven Development (TDD) by getting some hands-on experience writing code using TDD.

The lab is written in Node.js because JavaScript is a simple, ubiquitous language. You will _not_ need to be an expert in it to complete this lab. However, you must possess some basic programming experience to get the most out of it.

## Prerequisites

### Runtime Environment

You should have Node.js 10.x or above installed, preferably the latest Long-Term Support (LTS) version. At the time of this writing, that is version 12. Get it [here](https://nodejs.org/en/) or use [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) (We strongly recommend using `nvm`).

### Testing Environment

Our testing environment consists of the following tools. You will _not_ need detailed knowledge of these tools to complete this lab.

We're using Node Tap as our test framework. If you're not familiar with it, you should familiarize yourself with the <a href="https://node-tap.org/docs/api/" target="_blank">API</a>.

We use the Sinon library for mocking, stubbing, and spying in our unit tests. Check out the <a href="https://sinonjs.org/releases/v9.0.3/">API</a> if you'd like to know more. It's very useful for writing unit tests, so we encourage you to familiarize yourself with it.

For hard-to-unit-test modules like `express`, we've used <a href="https://github.com/thlorenz/proxyquire#readme" target="_blank">Proxyquire</a>. Hopefully, you won't need this much, but it is an important tool to be aware of.

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

## Additional Notes on the Tesing Environment

There are other popular testing frameworks such as <a href="https://jestjs.io/" target="_blank">Jest</a>, <a href="https://mochajs.org/" target="_blank">Mocha</a>, <a href="https://qunitjs.com/" target="_blank">QUnit</a> and <a href="https://github.com/avajs/ava" target="_blank">Ava.js</a>. They are all fine and will serve you well if you decide to try them out. Our particular setup prioritizes certain aspects of testing:

- A stub-first mindset to testing (vs. a spy-first mentality like <a href="https://jasmine.github.io/" target="_blank">Jasmine</a>-based frameworks)
- Very fast tests with native parallelized test runs
- The option to have a shallowly-nested test structure
