(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    $state.transitionTo('administrar');
  }
})();
