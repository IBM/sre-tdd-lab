const {getJoke} = require('./random-joke');

const tap = require('tap');
const sinon = require('sinon');

const dadJokesResources = require('../resources/dad-jokes');

const getRandomJokeStub = sinon.stub(dadJokesResources, 'getRandomJoke');

tap.afterEach(() => {
    getRandomJokeStub.reset();
});

tap.test('/random-joke route calls the random joke resource', t => {
    const appMock = {
        get: sinon.stub()
    };

    getJoke(appMock);

    t.ok(appMock.get.calledOnceWithExactly('/random-joke', sinon.match.func), 'the dad jokes end-point should be exposed');

    t.ok(getRandomJokeStub.calledOnce, 'get random joke resource called');

    t.end();
});
