(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .controller('ReportsController', ReportsController);

  /** @ngInject */
  function ReportsController($state) {
    var vm = this

    vm.currentNavItem = 'page1';
    $state.transitionTo('reports.sensoresAgua');

  }
})();
