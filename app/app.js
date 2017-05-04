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