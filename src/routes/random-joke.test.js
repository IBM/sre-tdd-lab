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

tap.test('calls the random joke resource and returns the body', async t => {
    const getRandomJokeStub = sinon.stub(dadJokesResources, 'getRandomJoke');

    const expectedResponse = 'some joke';
    getRandomJokeStub.resolves(expectedResponse);

    const appMock = {
        get: sinon.stub()
    };

    getJoke(appMock);

    const requestMock = {};
    const responseMock = {
        send: sinon.stub()
    };
    const getJokeCallback = appMock.get.getCalls()[0].args[1];

    await getJokeCallback(requestMock, responseMock);

    t.ok(getRandomJokeStub.calledOnceWith(), 'get random joke resource called');
    t.ok(responseMock.send.calledOnceWith(expectedResponse), 'send the random joke response');

    t.end();
});
