'use strict';

/* Services */

var condoServices = angular.module('condoServices', ['ngResource']);

condoServices.factory('Condo', ['$resource',
  function($resource){
    return $resource('condos/:condoId.json', {}, {
      query: {method:'GET', params:{condoId:'condos'}, isArray:true}
    });
  }]);
