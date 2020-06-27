/*var monModule = (function () {
    var cpt = 0
    return {
        incrementCompteur: function () {
            return cpt++
        }
    }
    //Accés au méthode grace au module ,maitrise de la modification des variables
})();
var i = monModule.incrementCompteur();
console.log(i);
i = monModule.incrementCompteur();
console.log(i);*/


var monSingleton = (function () {

    var instance;
    function init() {
        var hello = 'Hello' + Math.random();
        return {
            sayHello: function () {
                console.log(hello);
            }
        }
    }
    return {
        getInstance: function () {
            if (!instance)
                instance = init();

            return instance;
        }
    }

})();
var obj = monSingleton.getInstance();
var obj2 = monSingleton.getInstance();

obj.sayHello();
obj2.sayHello();//L'objet récupérer est le meme.




/*
Utiliser Ajax pour envoyer un formulaire au serveur


Objectif : Transformer les valeur saisi sur formulaire en objet.

*/

//Récupérer les données et les transformer en JSON
window.onload = function () {
    document.forms.le_form.onsubmit = function () {
        var le_form = document.forms.le_form;
        var data = {};
        for (var i = 0; i < le_form.length; i++) {
            if (le_form[i].name) {
                data[le_form[i].name] = le_form[i].value;
            }
        }
        console.dir(data);
        console.dir(JSON.stringify(data));//méthodes stringify(transforer en chaine de caractère)
        var strObj = JSON.stringify(data);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/gens', true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset = UTF-8');
        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4 && xhr.status == 200)
                console.log("OK");
            else {
                console.error("KO");
            }

        }
        xhr.send(strObj);
        return false;
    }

}
//Les envoyer au serveur avec

