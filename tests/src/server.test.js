const proxyquire = require('proxyquire').noCallThru();
const tap = require('tap');
const sinon = require('sinon');

const expressMock = {
    listen: sinon.stub(),
    use: sinon.stub()
};
const expressModuleStub = sinon.stub();
const routes = require('../../src/routes');

const morganMock = {};
const morganModuleStub = sinon.stub();

// In cases where the dependency you are consuming is exported so that no method is visible, you may need to mock it.
// In these cases Sinon cannot mock it properly. Tools like proxyquire or jest.mock() are helpful.
const serverMock = proxyquire('../../src/server', {
    express: expressModuleStub.returns(expressMock),
    morgan: morganModuleStub.returns(morganMock)
});

const consoleStub = sinon.stub(global.console, 'info');
const configureRoutesStub = sinon.stub(routes, 'configureRoutes');

tap.beforeEach(done => {
    expressMock.listen.resetHistory();
    expressModuleStub.resetHistory();
    consoleStub.resetHistory();
    configureRoutesStub.resetHistory();

    done();
});

tap.test('configure the server', t => {
    serverMock.start();

    t.ok(expressModuleStub.calledOnceWith(), 'server instantiates');
    t.ok(expressMock.listen.calledOnceWith(3000, sinon.match.func), 'server starts');

    t.end();
});

tap.test('configure the logger', t => {
    serverMock.start();

    t.ok(expressMock.use.calledWith(morganMock), 'express uses morgan');

    t.end();
});

tap.test('configure server routes', t => {
    serverMock.start();

    t.ok(configureRoutesStub.calledOnceWithExactly(expressMock), 'routes factory is called with the app');

    t.end();
});

tap.test('when the server starts', t => {
    serverMock.start();

    const appListenCallback = expressMock.listen.getCall(0).args[1];
    appListenCallback();

    t.ok(consoleStub.calledWith('The server is running on port 3000.'), 'server startup log message');

    t.end();
});
