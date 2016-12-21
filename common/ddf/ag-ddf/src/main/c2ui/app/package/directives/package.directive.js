(function () {
  // stub code for create package directive
  module.exports = (function packageDirective() {
    return {
      restrict: 'E',
      template: require('./package.template.html')
    };
  });
})();

