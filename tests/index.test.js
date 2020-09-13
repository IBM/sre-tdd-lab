const tap = require('tap');
const sinon = require('sinon');

const proxyquire = require('proxyquire').noCallThru();

const serverStartStub = sinon.stub();
proxyquire('..', {
    './src/server': {
        start: serverStartStub
    }
});

tap.afterEach(done => {
    serverStartStub.reset();
    done();
});

tap.test('start the server', t => {
    t.ok(serverStartStub.calledOnceWith(), 'start the server');

    t.end();
});
