function hello() {
  throw new Error('test-error');
}

async function asyncHello() {
  throw new Error('async test-error');
}


describe("Jasmine", function () {

  it("can handle error thrown", () => {
    // Notice: passing a function not calling it!
    expect(() => hello()).toThrow(new Error('test-error'));
  });

  it("can handle async error thrown", async () => {
    expectAsync(asyncHello()).toBeRejectedWith(new Error('async test-error'));
  });

});
