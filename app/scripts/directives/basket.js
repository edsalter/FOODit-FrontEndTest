'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:basket
 * @description
 * # basket
 */
angular.module('jstestApp')
  .directive('basket', function (BasketService) {
    return {
        templateUrl: "/views/basket.html",
        link: function ($scope) {
            $scope.basket = BasketService;

            $scope.menuExpanded = false;

            $scope.toggleMenu = function (){
                $scope.menuExpanded = !$scope.menuExpanded;
            }
        }
    };
  });
