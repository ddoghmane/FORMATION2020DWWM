//Le DOM est un API de manipulation de documents balisé,
//normalisé par le w3C et implémenter dans tous les langage

//Récupération d'éléments par id

window.onload = function () {

    var p1 = document.getElementById("p1");
    console.log(p1.innerHTML);



    //Récupération d'éléments par tag
    var arr_p = document.getElementsByTagName('p');
    console.dir(arr_p);//Html collection

    //Récupération d'éléments par nom de class

    var arr_p_class = document.getElementsByClassName('la_class');
    console.dir(arr_p_class);//Récuperation d'éléments dont la classe est la_class uniquement

//HTML5

//Récupération d'éléments par notation css
var p2_html5 =document.querySelector("#p2");
console.log(p2.innerHTML);

var p_html5 = document.querySelectorAll('.la_class')
console.dir(p_html5);//Récupération d'élément DOM directement
}