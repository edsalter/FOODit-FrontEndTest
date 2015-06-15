'use strict';

/**
 * @ngdoc service
 * @name jstestApp.BasketService
 * @description
 * # BasketService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
    .factory('BasketService', ['$http', function ($http) {
        var items = [];

        var service = {
            get: get,
            add: add,
            remove: remove,
            getItemCount: getItemCount
        };

        return service;

        function get () {
            return items;
        }

        function getItemCount () {
            return items.length;
        }

        function add (item) {
            items.push(item);
            return item;
        }

        function remove (item) {

        }
    }]);

