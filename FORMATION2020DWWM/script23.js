var Personne = function (p_prenom, p_nom) {//Fonction constructeur


    this.nom = p_nom;
    this.prenom = p_prenom;
}
Personne.prototype.age = 30;//Propriété
Personne.prototype.getAge = function () {//Méthode
    return this.age;
};
var p = new Personne("DOGMANE", 'Daoud');//Création de l'objet
var p2 = new Personne("DOGHMANE", 'Daoud');
console.log(p.getAge());
console.log(p2.getAge());

Array.prototype.showAll = function () {//Améliorer les objets déja éxistant

    for (var i = 0; i <= this.length - 1; i++) {
        console.log('[' + i + ']' + this[i]);

    }
};
var arr = ["un", "deux", "trois"];
arr.showAll();//Méthode showAll,permet de se CREER UNE BIBLIOTEQUE DE COMPOSANT