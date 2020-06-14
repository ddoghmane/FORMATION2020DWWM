//L'objet Windows représente la fenetre du navigateur
var innerHeight = window.innerHeight;//La taille de l'écran : Récuperer innerheight dans une variable et ensuite appeller la méthode windows.innerheight;
var innerWidth = window.innerWidth;

console.log(innerHeight + " " + innerWidth);
console.log(window.location);
alert("Hello"); //Accéder a des méthodes ou certaine propriété de l'objet window sans passer par celui-ci.

var form = document.forms['le_form'];
var txt_nom = form.txt_nom;
var chk_yes = form.chk_yes;
console.dir(txt_nom.value);
console.dir(chk_yes.checked);

console.dir(form);//Permet de récupérer un objet et afficher sa structure

var Document_Object_Model = document.getElementById("Document_Object_Model")//Objet document :fondamental en JS rpz sous forme d'objet de la page web 
console.log(Document_Object_Model);

//Les propriétés fonctionnent en écriture
Document_Object_Model.innerHTML = "Second titre";