(function () {
  'use strict';

  function localeConfig($translateProvider) {
    var locales = {
      'en_us': 'en_us',
      'de_de': 'de_de'
    };
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/locale-',
      suffix: '.json'
    });
    $translateProvider.registerAvailableLanguageKeys(['en_us', 'de_de'], locales);
    $translateProvider.fallbackLanguage('en_us');
    $translateProvider.preferredLanguage('en_us');
  }

  // this helps to enable angular on liferay
  document.getElementsByTagName('html')[0].setAttribute('ng-app', 'app');

  // create angular module
  var module = angular.module('app', ['pascalprecht.translate'])
    .config(localeConfig)
    
    //load all the modules
    require('./package');
  module.exports = module;
} ());