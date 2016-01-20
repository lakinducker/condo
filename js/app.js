'use strict';

/* App Module */

var condoApp = angular.module('condoApp', [
  'ngRoute',
  'condoAnimations',
  'condoControllers',
  'condoFilters',
  'condoServices',
  'uiGmapgoogle-maps'
]);

condoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/condos', {
        templateUrl: 'partials/condo-list.html',
        controller: 'CondoListCtrl'
      }).
      when('/condos/:condoId', {
        templateUrl: 'partials/condo-detail.html',
        controller: 'CondoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/condos'
      });
  }]);
