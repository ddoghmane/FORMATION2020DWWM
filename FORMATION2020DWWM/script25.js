//Un évenement est un objet ,il a des propriétés et des méthodes
//Evenement onChange : un élément html a changé
function doChange(e) {

    console.dir(e);
    console.log("onChange");



    //Evenement onclick : un utilisateur clique sur un élément html

}
function doClick(e) {
    console.log("click button");

    console.dir(e);
}
//Bouillonement d'évenements
function doClickDiv(e) {
    console.log("click div");

    console.dir(e)
}
/*Il ne faut pas faire référence a du js dans une page web,webdesigner et développeur ne sont pas forcément
meme personne*/
window.onload = function () {

    var the_input = document.getElementById('the_input');
    the_input.onchange = function (e) {     //Affecter un évenement a un élément
        console.dir(e);
    }
}
window.onload = function () {

    var the_button = document.getElementById('the_button');
    the_button.onclick = function (e) {     //Affecter un évenement a un élément
        console.dir(e);
    }
}
