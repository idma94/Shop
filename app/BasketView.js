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