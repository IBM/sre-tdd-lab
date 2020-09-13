const {
    configureRoutes
} = require('../../../src/routes');

const tap = require('tap');
const sinon = require('sinon');

const randomJokeRoute = require('../../../src/routes/random-joke');
const searchJokesRoute = require('../../../src/routes/search-jokes');

const randomJokeStub = sinon.stub(randomJokeRoute, 'getJoke');
const searchJokesStub = sinon.stub(searchJokesRoute, 'searchJokes');

tap.afterEach(done => {
    randomJokeStub.reset();
    searchJokesStub.reset();
    done();
});

tap.test('configure routes', t => {
    const appMock = {};
    configureRoutes(appMock);

    t.ok(randomJokeStub.calledWithExactly(appMock), 'the random joke route factory is passed the app');
    t.ok(searchJokesStub.calledWithExactly(appMock), 'the search jokes route factory is passed the app');

    t.end();
});
