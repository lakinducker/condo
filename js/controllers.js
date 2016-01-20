'use strict';

/* Controllers */

var condoControllers = angular.module('condoControllers', []);

condoControllers.controller('CondoListCtrl', ['$scope', 'Condo',
  function($scope, Condo) {
    $scope.condos = Condo.query();
    $scope.orderProp = 'price';

    $scope.priceMin = 0;
    $scope.priceMax = 3000000;
  }]);

condoControllers.controller('CondoDetailCtrl', ['$scope', '$routeParams', 'Condo', '$log',
  function($scope, $routeParams, Condo, $log) {
    $scope.condo = Condo.get({condoId: $routeParams.condoId}, function(condo) {
      $scope.mainImageUrl = condo.images[0];

      $scope.map = {center: {latitude: condo.lat, longitude: condo.lng }, zoom: 12 };
      $scope.staticMarker = {
        id: 0,
        coords: {
          latitude: condo.lat,
          longitude: condo.lng
        },
        options: { draggable: true },
        events: {
          dragend: function (marker, eventName, args) {
            $log.log('marker dragend');
            $log.log(marker.getPosition().lat());
            $log.log(marker.getPosition().lng());
          }
        }
      };
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
