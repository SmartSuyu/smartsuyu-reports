(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .service('RequestService', RequestService);

  function RequestService(Restangular, SMARTSUYU_URL) {
    var service = {};
    Restangular.setBaseUrl(SMARTSUYU_URL);

    service.getSensorsAgua = function() {
      var baseRequest;
      var request;
      baseRequest = Restangular.all('sensorAgua');
      request = baseRequest.getList();
      return request;
    };

    service.getSensorsTierra = function() {
      var baseRequest;
      var request;
      baseRequest = Restangular.all('sensorTierra');
      request = baseRequest.getList();
      return request;
    };

    service.postDenuncia = function(params, queryParams) {
      var baseRequest;
      var request;
      baseRequest = Restangular.all('denuncias/');
      request = baseRequest.customPOST(params, '', queryParams || {});
      return request;
    };

    return service;
  }

})();
