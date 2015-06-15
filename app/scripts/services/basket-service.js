'use strict';

/**
 * @ngdoc service
 * @name jstestApp.BasketService
 * @description
 * # BasketService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
    .factory('BasketService', ['$filter', function ($filter) {
        var items = [];

        var service = {
            get: get,
            add: add,
            remove: remove,
            getMains: getMains,
            getOthers: getOthers,
            totalPrice: totalPrice
        };

        return service;

        function get () {
            return items;
        }

        function getMains () {
            var mains = $filter('filter')(items, {"course": "main"})
            return mains;
        }

        function getOthers () {
            var mains = $filter('filter')(items, {"course": "other"})
            return mains;
        }

        function add (item) {
            items.push(item);
            return item;
        }

        function remove (item) {
            //TODO remove item from basket
        }

        function totalPrice(){
            var total = 0;

            for(var i=0; i < items.length; i++){
                var item = items[i];

                total += parseFloat(item.price);
            }

            return total;
        }

    }]);

