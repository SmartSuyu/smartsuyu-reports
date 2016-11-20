(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .controller('SensoresTierraController', SensoresTierraController);

  /** @ngInject */
  function SensoresTierraController(RequestService) {
    var vm = this;

    RequestService.getSensorsTierra({})
      .then(function(response){
        vm.sensors = response;
      });
  }
})();
