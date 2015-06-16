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
            /*
                TODO Should only add each item once, then add a quantity
             */
            items.push(item);
            return item;
        }

        function remove (index) {
            items.splice(index, 1);
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

