(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .controller('PruebaController', PruebaController);

  /** @ngInject */
  function PruebaController() {

    var vm = this

    vm.type = 'polarArea';
    vm.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    vm.series = ['Parcela A', 'Parcela B', 'Parcela C', 'Parcela D', 'Parcela E'];
    vm.data = [
      [10, 12, 14, 16, 18, 19, 22, 25, 25, 27, 28, 30],
      [5, 6, 7, 12, 18, 13, 23, 20, 15, 18, 28, 25],
      [12, 23, 15, 16, 12, 14, 23, 12, 33, 21, 28, 30],
      [11, 13, 12, 16, 13, 10, 14, 13, 15, 15, 17, 29],
      [10, 12, 14, 16, 18, 19, 22, 25, 25, 27, 28, 30]
    ];
    vm.onClick = function (points, evt) {
      console.log(points, evt);
    };
    vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    vm.options = {
      title: {
        display: true,
        text: 'Crecimiento de producción por año'
      },
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };

  }
})();
