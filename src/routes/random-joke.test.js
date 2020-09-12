const {
    getJoke
} = require('./random-joke');

const tap = require('tap');
const sinon = require('sinon');

const dadJokesResources = require('../resources/dad-jokes');

tap.test('/random-joke route exists', t => {
    const appMock = {
        get: sinon.stub()
    };

    getJoke(appMock);

    t.ok(appMock.get.calledOnceWithExactly('/random-joke', sinon.match.func), 'the dad jokes end-point should be exposed');

    t.end();
});

tap.test('calls the random joke resource and returns the body', t => {
    const getRandomJokeStub = sinon.stub(dadJokesResources, 'getRandomJoke');

    const appMock = {
        get: sinon.stub()
    };

    getJoke(appMock);

    const requestMock = {};
    const responseMock = {
        send: sinon.stub()
    };
    const getJokeCallback = appMock.get.getCalls()[0].args[1];

    getJokeCallback(requestMock, responseMock);

    t.ok(getRandomJokeStub.calledOnceWith(), 'get random joke resource called');

    t.end();
});
