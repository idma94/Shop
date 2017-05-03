/**
 * Created by Zeus on 02.05.2017.
 */
"use strict";
var Basket = (function () {
    var products = [];

    function _add(item) {
        products.push(item)
    }

    function _getAll() {
        return products
    }

    function _remove(id) {

    }

    function _count() {
        return products.length
    }

    return {
        add: _add,
        getAll: _getAll,
        remove: _remove,
        count: _count
    }
})();

