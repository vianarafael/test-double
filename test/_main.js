const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { Some } = require("../main");

// Setup
const myObj = new Some();

describe("my some class", () => {
  it("should add 2 numbers", () => {
    // Execution
    expect(myObj.add(2, 3)).to.equal(5);
  });
  it("Spies the add methond", () => {
    // created a spy
    const spy = sinon.spy(myObj, "add");
    myObj.anotherFunction(2, 3);
    expect(spy.calledTwice).to.be.true;
  });
  it("Mocks the sup method", () => {
    const mock = sinon.mock(myObj);
    const expectation = mock.expects("sup");
    expectation.exactly(1);
    myObj.anotherFunction(1, 2);
    mock.verify();
  });
  it("should use a stub - that assumes the function returs true", () => {
    sinon.stub(myObj, "isLogged").returns(true);
    expect(myObj.checkLogIn()).to.equal("Logged");
  });
  it("Fakes a call", () => {
    const fake = sinon.fake.returns(201);
  });
});
