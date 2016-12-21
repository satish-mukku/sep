(function () {
    'use strict';
    // index.js file which loads all teh depedencies in the module
    var angular = require('angular');
    module.exports = angular.module('app').controller('packageCtrl', require('./package.controller'));
    module.exports = angular.module('app').directive('createPackage', require('./package.directive'));
    module.exports = angular.module('app').directive('packageCatalog', require('./package.catalog.directive'));
})();