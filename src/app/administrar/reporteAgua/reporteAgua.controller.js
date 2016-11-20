(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .controller('ReporteAguaController', ReporteAguaController);

  /** @ngInject */
  function ReporteAguaController() {
    var vm = this;
    vm.labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
    vm.series = ['PH', 'Conductividad', 'Solidos Disueltos', 'Salinidad', 'Temperatura'];

    vm.type = 'polarArea';

    vm.toggle = function () {
      vm.type = vm.type === 'polarArea' ?
        'pie' : 'polarArea';
    };



    vm.data = [
      [4, 5, 5.7, 6, 5.5, 7, 7.1],
      [12, 2, 10, 15, 11, 10, 7.5],
      [28, 48, 40, 19, 23, 27, 23],
      [28, 48, 40, 19, 45, 27, 12],
      [28, 24, 16, 15, 14, 27, 10],
    ];

    vm.options = {
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    }
  }
})();
