'use strict';

angular.module('myApp.searchBox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/searchbox', {
    templateUrl: 'searchbox/searchBox.html',
    controller: 'SearchBoxCtrl'
  });
}])

.controller('SearchBoxCtrl', [function() {

}]);