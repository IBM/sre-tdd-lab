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

tap.test('get a random dad joke', async t => {
    getStub.resolves({
        body: bodyMock
    });

    const response = await dadJokes.getRandomJoke();

    t.ok(getStub.calledOnceWith(DAD_JOKES_API_BASE_URL, {
        headers: BASIC_HEADERS
    }), 'get call for a random dad joke fires');
    t.equal(response, bodyMock, 'returns the response body');

    t.end();
});

tap.test('when the call to get a random dad joke fails', t => {
    const errorMock = 'some error';
    getStub.rejects(errorMock);

    t.rejects(() => dadJokes.getRandomJoke(), new Error(errorMock), 'throws the error');

    t.end();
});
