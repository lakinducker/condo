'use strict';

/* Filters */

angular.module('condoFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});



angular.module('condoFilters', []).filter('pricebetween', function(){
  return function(items, min, max) {
    var filtered = [];
    angular.forEach(items, function(item, key) {
      if(item.price <= max && item.price >= min) {
        filtered.push(item);
      }
    });
    return filtered;
  };
});


