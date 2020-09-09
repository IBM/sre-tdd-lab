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

tap.test('start an express server', t => {
    serverMock.start();

    t.ok(expressModuleStub.calledOnceWith(), 'server instantiates');

    t.end();
});
