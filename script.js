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



