const randomJoke = require('./random-joke');

const tap = require('tap');
const sinon = require('sinon');

const dadJokesResources = require('../resources/dad-jokes');

const randomJokeStub = sinon.stub(dadJokesResources, 'getRandomJoke');

tap.afterEach(() => {
    randomJokeStub.reset();
});

tap.test('/random-joke route calls the random joke resource', t => {
    const appMock = {
        get: sinon.stub()
    };

    randomJoke.get(appMock);

    t.ok(appMock.get.calledOnceWithExactly('/random-joke', sinon.match.func), 'the dad jokes end-point should be exposed');

    t.ok(randomJokeStub.calledOnce, 'get random joke resource called');

    t.end();
});
