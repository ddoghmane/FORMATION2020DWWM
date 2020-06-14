window.alert('Bonjour a tous');//supprimer le nom de l'objet ,implicitement js utilisera l'objet window
//Se termine par un point virgule js comme le php et un langage d'instructions
//aller sur la console dans le naviagteur pour visualiser les erreurs commises
var score = 2000;//Les variables : regle de nommage(pas de mot clé du langage)ne peut contenir que des lettres chiffre ainsi que _ et $,ne peut pas commencer par un chiffre,pas d'espace, majuscule ou _ pour séparer les mots
alert(score)
var titre = "<h1 class=\"maclasse\">Mon super titre</h1>";//utiliser des backslash pour précéder les caractères qui dérange
var prenom = prompt('Quel est votre prénom');//méthodes prompt,capturer une entré du visiteur

var nom = prompt('Quel est votre nom');
alert(prenom + ' ' + nom);//concaténation de chaines de caractères
console.log(prenom.length);//Propriété length
console.log(prenom.toUpperCase() + ' ' + nom.toUpperCase());//Méthode touppercase
