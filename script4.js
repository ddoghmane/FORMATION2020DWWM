//AJAX : Le navigateur ne charge plus complètement une page 
//Il récupère les données en JS
//Il modifie la page en conséquence

/*Faire une requete Ajax :

La requete est de type GET ,vers la ressource "data.json"
Elle est asynchrone(Mode de transmission des données dans lequel l'instant d'émission de chaque caractère ou bloc de caractères est fixé arbitrairement.La transmission de chaque caractère 
comporte un bit de départ, un ensemble de bits représentant le caractère à transmettre et un bit d'arrêt.)Nécessite méthode callback ,méthode d'appel pour répondre au retour du serveur*/


window.onload = function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'lorem.txt', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);

        }

    }
 
 
 
    xhr.send();//!!!!!!Cross origin requests are only supported for HTTP(due surement a browser sync )
    
    
  var strObj ="{'nom':'DOGHMANE','prenom' :'DAOUD'};"
  console.log(strObj) ;
  var obj = eval('('+strobj+')');
 console.dir(obj);
 
}
//Les états de l'objet XHR :
//0 requete non initialisé,1 connexion établie,2 requete recue,3 requete en cours de traitement,requete finie et la réponse est prete
//Sert a aficher des image (ex :logo déroulant qui dit que le traitement est en cours)




/*Découvrir JSON :Format de donnés renvoyées par le serveur 
Javascript Object Notation ,un serveur peut nous envoyer du json



*/