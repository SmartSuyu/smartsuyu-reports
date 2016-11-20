(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .controller('SensoresAguaController', SensoresAguaController);

  /** @ngInject */
  function SensoresAguaController(RequestService) {
    var vm = this;

    RequestService.getSensorsAgua({})
      .then(function(response){
        vm.sensors = response;
      });
  }
})();
