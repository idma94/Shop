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