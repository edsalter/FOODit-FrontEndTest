'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', 'BasketService', function ($scope, MenuService) {
	$scope.menu = {};

    MenuService.get('/data/menu.json').success(function(data) {
	  $scope.menu = data;
	});

  }
])

/*
    TODO split into a separate file
 */
.directive('basket', function(BasketService) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: "/views/basket.html",
        link: function ($scope) {
            $scope.basket = BasketService;
        }
    };
});

