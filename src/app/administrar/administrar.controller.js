(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .controller('AdministrarController', AdministrarController);

  /** @ngInject */
  function AdministrarController($state) {
    var vm = this;

    vm.goTo = function(site){
      console.log('hola pirolas');
      $state.transitionTo(site);
    };
  }
})();
