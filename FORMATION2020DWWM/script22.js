
var Personne1 = {
    prenom : "ROBERT",//Propriétés de l'objet ,propre a l'objet
    nom : "DURAND",
    direbonjour : function(){//Méthodes ,fonction encapsulé dans l'objet

        console.log("Bonjour!");

        
    }
};
Personne1.direbonjour();//Appel de la fonction direbonjour

var personne2 ={};//Crétation d'objet différé
personne2.nom = "Doghmane";
personne2.prenom = "Daoud";
personne2.sayHello = function (){
    console.log("Hello!");
};




var personne = {//Notion d'objet , la valeur this(mot clé réservez du langage js qui va permettre d'afficher les propriétés de l'objet courant)

    nom: "DOGHMANE",
    prénom: "DAOUD",
    affichePrenom: function () {
        console.log("prenom :" + this.prénom);

    }





};
personne.affichePrenom();


var Personne = function (p_nom, p_prenom) {//Notion de constructeur
    this.nom = p_nom;
    this.prenom = p_prenom;
    this.afficheNom = function () {
        console.log('nom :' + this.nom);
    }
    this.affichePrenom = function () {
        console.log('prénom :' + this.prenom);
    }
};
var p = new Personne("DURAND", "ROBERT");
p.afficheNom();
p.affichePrenom();

//L'opérateur instanceof permet de tester le constructeur de l'objet
//En js tous les objets heritent de Object et bénéficie des méthodes toString() et valueOf()