(function() {
  'use strict';

  angular
    .module('smartsuyuReports')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
