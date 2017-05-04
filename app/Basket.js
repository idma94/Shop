/**
 * Created by Zeus on 04.05.2017.
 */
"use strict";
function Card(id, title, prise, count) {
    this.id = id;
    this.title = title;
    this.prise = prise;
    this.count = count || 1;
}

var Basket = (function () {
    function _add(item, callback) {
        Storage.setItem(new Card(
            item.id,
            item.title,
            item.prise,
            item.count
        ), callback);
        // ...
    }
    function _getAll() {
        return Storage.getItems()
    }
    function _remove(id, callback) {
        Storage.removeItem(id, callback);
        // ...
        return Storage.getItems()
    }
    function _count() {
        return Storage.getItems().length
    }
    function _clear() {
        Storage.clear()
    }

    return {
        add: _add,
        getAll: _getAll,
        remove: _remove,
        count: _count,
        clear: _clear
    }
})();
