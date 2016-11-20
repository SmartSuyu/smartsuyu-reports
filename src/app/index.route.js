(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('reports', {
        url: '/reports',
        templateUrl: 'app/reports/reports.html',
        controller: 'ReportsController',
        controllerAs: 'reports'
      })
        .state('reports.prueba', {
          url: '/prueba',
          templateUrl: 'app/reports/prueba/prueba.html',
          controller: 'PruebaController',
          controllerAs: 'prueba'
        })

        .state('reports.sensoresAgua', {
          url: '/sensoresAgua',
          templateUrl: 'app/reports/sensoresAgua/sensoresAgua.html',
          controller: 'SensoresAguaController',
          controllerAs: 'sensoresAgua'
        })

        .state('reports.sensoresTierra', {
          url: '/sensoresTierra',
          templateUrl: 'app/reports/sensoresTierra/sensoresTierra.html',
          controller: 'SensoresTierraController',
          controllerAs: 'sensoresTierra'
        })

      .state('administrar', {
        url: '/administrar',
        templateUrl: 'app/administrar/administrar.html',
        controller: 'AdministrarController',
        controllerAs: 'administrar'
      })
        .state('reporteAgua', {
          url: '/reporteAgua',
          templateUrl: 'app/administrar/reporteAgua/reporteAgua.html',
          controller: 'ReporteAguaController',
          controllerAs: 'reporteAgua'
        })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
