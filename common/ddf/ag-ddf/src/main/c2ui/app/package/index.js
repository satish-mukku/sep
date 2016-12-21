(function () {
    'use strict';
    // index.js file which loads all the depedencies in package module
    var angular = require('angular');
    module.exports = angular.module('app').controller('packageCtrl', require('./controllers/package.controller'));
    module.exports = angular.module('app').directive('createPackage', require('./directives/package.directive'));
    module.exports = angular.module('app').directive('packageCatalog', require('./directives/package.catalog.directive'));
})();