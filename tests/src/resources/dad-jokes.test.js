const dadJokes = require('../../../src/resources/dad-jokes');

const tap = require('tap');
const sinon = require('sinon');
const got = require('got');

const {
    BASIC_HEADERS,
    DAD_JOKES_API_BASE_URL
} = require('../../../src/resources/constants');

const bodyMock = {
    some: 'response'
};

const getStub = sinon.stub(got, 'get');

tap.afterEach(done => {
    getStub.reset();
    done();
});

tap.test('get a random dad joke', t => {
    t.test('api call', tChild => {
        getStub.resolves({
            body: bodyMock
        });

        dadJokes.getRandomJoke();

        tChild.ok(getStub.calledOnceWith(DAD_JOKES_API_BASE_URL, {
            headers: BASIC_HEADERS
        }), 'makes the get call for a random dad joke');

        tChild.end();
    });

    t.test('when the call to get a random dad joke succeeds', async tChild => {
        getStub.resolves({
            body: bodyMock
        });

        const response = await dadJokes.getRandomJoke();

        tChild.equal(response, bodyMock, 'returns the response body');

        tChild.end();
    });

    t.test('when the call to get a random dad joke fails', async tChild => {
        const errorMock = 'some error';
        getStub.rejects(errorMock);

        tChild.rejects(() => dadJokes.getRandomJoke(), new Error(errorMock), 'throws the error');

        tChild.end();
    });

    t.end();
});
