const proxyquire = require('proxyquire').noCallThru();
const tap = require('tap');
const sinon = require('sinon');

const expressMock = {
    listen: sinon.stub()
};
const expressModuleStub = sinon.stub();
const serverMock = proxyquire('./server', {
    express: expressModuleStub.returns(expressMock)
});
const consoleSpy = sinon.spy(global.console, 'log');

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

    t.ok(consoleSpy.calledWith('The server is running on port 3000.'), 'server startup log message');

    t.end();
});
