const dadJokes = require('./data-jokes');

const tap = require('tap');
const sinon = require('sinon');
const got = require('got');

const constants = require('./constants');

const getStub = sinon.stub(got, 'get');

tap.afterEach(() => {
    getStub.restore();
});

tap.test('random dad joke', t => {
    dadJokes.getRandomJoke();

    t.ok(getStub.calledOnceWith(constants.DAD_JOKES_API_BASE_URL), 'server instantiates');
});
