const proxyquire = require('proxyquire').noCallThru();
const tap = require('tap');
const sinon = require('sinon');

const expressMock = {
    listen: sinon.stub()
};
const expressModuleStub = sinon.stub();

// In cases where the dependency you are consuming is exported so that no method is visible, you may need to mock it.
// In these cases Sinon cannot mock it properly. Tools like proxyquire or jest.mock() are helpful.
const serverMock = proxyquire('../../src/server', {
    express: expressModuleStub.returns(expressMock)
});

const consoleStub = sinon.stub(global.console, 'info');

tap.test('start an express server', t => {
    serverMock.start();

    t.ok(expressModuleStub.calledOnceWith(), 'server instantiates');
    t.ok(expressMock.listen.calledOnceWith(3000, sinon.match.func), 'server starts');

    t.end();
});

tap.test('when the server starts', t => {
    serverMock.start();

    const appListenCallback = expressMock.listen.getCall(0).args[1];
    appListenCallback();

    t.ok(consoleStub.calledWith('The server is running on port 3000.'), 'server startup log message');

    t.end();
});
