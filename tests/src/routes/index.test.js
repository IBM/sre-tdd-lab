const {
    configureRoutes
} = require('../../../src/routes');

const tap = require('tap');
const sinon = require('sinon');

const randomJokeRoute = require('../../../src/routes/random-joke');

const randomJokeStub = sinon.stub(randomJokeRoute, 'getJoke');

tap.afterEach(done => {
    randomJokeStub.reset();
    done();
});

tap.test('configure routes', t => {
    const appMock = {};
    configureRoutes(appMock);

    t.ok(randomJokeStub.calledWithExactly(appMock), 'the random joke route factory is passed the app');

    t.end();
});
