const {
    getJoke
} = require('../../../src/routes/random-joke');

const tap = require('tap');
const sinon = require('sinon');

const dadJokesResources = require('../../../src/resources/dad-jokes');
const {
    RANDOM_JOKE_ENDPOINT
} = require('../../../src/routes/endpoints');

const getRandomJokeStub = sinon.stub(dadJokesResources, 'getRandomJoke');

tap.afterEach(done => {
    getRandomJokeStub.reset();
    done();
});

tap.test('random joke', t => {
    t.test('configure route', tChild => {
        const appMock = {
            get: sinon.stub()
        };

        getJoke(appMock);

        tChild.ok(appMock.get.calledOnceWithExactly(RANDOM_JOKE_ENDPOINT, sinon.match.func), `the ${RANDOM_JOKE_ENDPOINT} end-point should be exposed`);

        tChild.end();
    });

    t.test('when the random joke call succeeds', async tChild => {
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

        tChild.ok(getRandomJokeStub.calledOnceWith(), 'get random joke resource called');
        tChild.ok(responseMock.send.calledOnceWith(expectedResponse), 'send the random joke response');

        tChild.end();
    });

    t.test('when the random joke call fails', async tChild => {
        const expectedError = 'some joke';
        getRandomJokeStub.rejects(expectedError);

        const appMock = {
            get: sinon.stub()
        };

        getJoke(appMock);

        const requestMock = {};
        const responseMock = {
            send: sinon.stub()
        };
        const getJokeCallback = appMock.get.getCalls()[0].args[1];

        tChild.rejects(() => getJokeCallback(requestMock, responseMock), new Error(expectedError), 'throws the error');

        tChild.end();
    });

    t.end();
});
