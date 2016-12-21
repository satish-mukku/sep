describe("createPackage", function () {
// beforeEach(function() {
//     module('app');
//    });
// beforeEach(module('app'));
   it('createPackage should exists', function () {
    expect("createPackage").toBeDefined();
  });

  it('createPackage should not exists', function () {
    expect("createPackage").toBeUndefined();
  });
});