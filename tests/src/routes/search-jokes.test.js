const {
    searchJokes
} = require('../../../src/routes/search-jokes');

const tap = require('tap');
const sinon = require('sinon');

const dadJokesResources = require('../../../src/resources/dad-jokes');
const {
    SEARCH_JOKE_ENDPOINT
} = require('../../../src/routes/endpoints');

const searchJokesStub = sinon.stub(dadJokesResources, 'searchJokes');

tap.afterEach(done => {
    searchJokesStub.reset();
    done();
});

tap.test('random joke', t => {
    t.test('configure route', tChild => {
        const appMock = {
            get: sinon.stub()
        };

        searchJokes(appMock);

        tChild.ok(appMock.get.calledOnceWithExactly(SEARCH_JOKE_ENDPOINT, sinon.match.func), `the ${SEARCH_JOKE_ENDPOINT} end-point should be exposed`);

        tChild.end();
    });

    t.test('when the search jokes call succeeds', async tChild => {
        const expectedResponse = 'some joke';
        searchJokesStub.resolves(expectedResponse);

        const appMock = {
            get: sinon.stub()
        };

        searchJokes(appMock);

        const requestMock = {};
        const responseMock = {
            send: sinon.stub()
        };
        const searchJokesCallback = appMock.get.getCalls()[0].args[1];

        await searchJokesCallback(requestMock, responseMock);

        tChild.ok(searchJokesStub.calledOnceWith(), 'search jokes resource called');
        tChild.ok(responseMock.send.calledOnceWith(expectedResponse), 'send the search jokes response');

        tChild.end();
    });

    t.test('when the search jokes call fails', async tChild => {
        const expectedError = 'some joke';
        searchJokesStub.rejects(expectedError);

        const appMock = {
            get: sinon.stub()
        };

        searchJokes(appMock);

        const requestMock = {};
        const responseMock = {
            send: sinon.stub()
        };
        const searchJokesCallback = appMock.get.getCalls()[0].args[1];

        tChild.rejects(() => searchJokesCallback(requestMock, responseMock), new Error(expectedError), 'throws the error');

        tChild.end();
    });

    t.end();
});
