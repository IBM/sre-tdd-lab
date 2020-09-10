const dadJokes = require('./dad-jokes');

const tap = require('tap');
const sinon = require('sinon');
const got = require('got');

const {BASIC_HEADERS, DAD_JOKES_API_BASE_URL} = require('./constants');

const getStub = sinon.stub(got, 'get');

tap.test('get a random dad joke', t => {
    dadJokes.getRandomJoke();

    t.ok(getStub.calledOnceWith(DAD_JOKES_API_BASE_URL, BASIC_HEADERS), 'get call for a random dad joke fires');

    t.end();
});
