const dadJokes = require('../../../src/resources/dad-jokes');

const tap = require('tap');
const sinon = require('sinon');
const got = require('got');

const {
    BASIC_HEADERS,
    DAD_JOKES_API_BASE_URL,
    DAD_JOKES_SEARCH_URL
} = require('../../../src/resources/constants');

const getBodyMock = () => ({
    some: 'response'
});

const getStub = sinon.stub(got, 'get');

tap.afterEach(done => {
    getStub.reset();
    done();
});

tap.test('get a random dad joke', t => {
    t.test('api call', tChild => {
        getStub.resolves({
            body: getBodyMock()
        });

        dadJokes.getRandomJoke();

        tChild.ok(getStub.calledOnceWith(DAD_JOKES_API_BASE_URL, {
            headers: BASIC_HEADERS
        }), 'makes the get call for a random dad joke');

        tChild.end();
    });

    t.test('when the call to get a random dad joke succeeds', async tChild => {
        const bodyMock = getBodyMock();
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

tap.test('search for a dad joke', t => {
    t.test('api call', tChild => {
        getStub.resolves({
            body: getBodyMock()
        });

        dadJokes.searchJokes();

        tChild.ok(getStub.calledOnceWith(DAD_JOKES_SEARCH_URL, {
            headers: BASIC_HEADERS
        }), 'makes the get call to search for jokes matching a term and does not pass the search param');

        tChild.end();
    });

    t.test('passes a search term', tChild => {
        getStub.resolves({
            body: getBodyMock()
        });

        const searchTerm = 'some search term';
        dadJokes.searchJokes(searchTerm);

        tChild.ok(getStub.calledOnceWith(DAD_JOKES_SEARCH_URL, {
            headers: BASIC_HEADERS,
            searchParams: {
                term: searchTerm
            }
        }), 'makes the get call to search for jokes matching a term including the term');

        tChild.end();
    });

    t.test('when the call to search for a term in dad jokes succeeds', async tChild => {
        const bodyMock = getBodyMock();
        getStub.resolves({
            body: bodyMock
        });

        const response = await dadJokes.searchJokes();

        tChild.equal(response, bodyMock, 'returns the response body');

        tChild.end();
    });

    t.test('when the call to search for dad jokes fails', async tChild => {
        const errorMock = 'some error';
        getStub.rejects(errorMock);

        tChild.rejects(() => dadJokes.searchJokes(), new Error(errorMock), 'throws the error');

        tChild.end();
    });

    t.end();
});
