/**
 * Created by Zeus on 02.05.2017.
 */
window.onload = function () {
    var card = initElements('.card');
    // На все карточки повесить обработчик
    console.log(card[0].children);

    var buttons = initElements('.choice-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            Basket.add({id: Math.ceil(Math.random() * 10), title: 'Tera' + Math.ceil(Math.random() * 100), prise: Math.random()* 1000});
            console.log(Basket.getAll())
        })
    }

    function initElements(value) {
        var char = value.charAt(0); // #-id .class
        var elements = [];
        switch(char) {
            case '#':
                var id = value.substring(1);
                elements = document.getElementById(id);
                break;
            case '.':
                var className = value.substring(1);
                elements = document.getElementsByClassName(className);
                break;
            // ...
            default:
                return new Error('invalid argument');

        }
        return elements;
    }
};
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

/**
 * Created by Zeus on 04.05.2017.
 */
document.addEventListener("DOMContentLoaded", function () {
    var cart = document.getElementById('cart');
    cart.addEventListener('click', function () {
        listToggle()
    });
    function render() {
        Basket.getAll();
    }
    function listToggle() {
        var list = document.getElementById('cart-list');
        if(list.style.display === 'none' || list.style.display === ''){
            list.style.display = 'block'
        } else {
            list.style.display = 'none'
        }
    }
});
/**
 * Created by Zeus on 04.05.2017.
 */
var Shop = Shop || {};



/**
 * Created by Zeus on 04.05.2017.
 */
var storageName = 'Shop123';
var Storage = {
    setItem: function (item, callback) {
        var ID = item.id;
        var collection  = JSON.parse(localStorage.getItem(storageName)) || [];
        var ifFound = this.find(collection, ID);

        if(ifFound !== -1){
            collection[ifFound].count += item.count;
            console.log(collection[ifFound]);
            localStorage.setItem(storageName, JSON.stringify(collection));
        } else {
            collection.push(item);
            localStorage.setItem(storageName, JSON.stringify(collection))
        }
        if(callback)
            callback()
    },
    removeItem: function (id, callback) {
        var collection  = JSON.parse(localStorage.getItem(storageName));
        var newCollection = collection.filter(function (value) {
            return value.id !== id;
        });
        localStorage.setItem(storageName, JSON.stringify(newCollection))
        if (callback)
            callback()
    },
    clear: function (id) {
        localStorage.clear();
    },
    getItems: function () {
        return JSON.parse(localStorage.getItem(storageName))
    }
};
/**
 * It is looking for product in storage by id
 * @return number
 * */
Storage.find = function (collection, target) {
    var arr = collection;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].id === target){
            return i;
        }
    }
    return -1;
};