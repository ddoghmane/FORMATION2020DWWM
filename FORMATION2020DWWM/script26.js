/*window.onload = function(){


    var btn_submit =document.getElementById('btn_submit');
    btn_submit.onclick=function(){

      console.log(document.forms[0].elements.nom ); //Accéder aux éléments d'un formulaire 
      console.log(document.forms[0].elements['email']);
      console.log(document.forms[0].elements[2] ); 

      console.dir(document.forms[0].elements.nom.value ); //Deviennent des objet
      console.dir(document.forms[0].elements['email'].value);
      console.dir(document.forms[0].elements[2] .value); 
    }*/
//Validation de formulaire : empecher l'envoi du dit formulaiaire s'il n'est pas correct
window.onload = function (){
    document.forms.le_form.onsubmit = function () {
        var result = false;
        if (document.forms.le_form.elements.nom.value!= "")//Tester si la value est différente de vide l,le formulaire sera envoyé
            result = true;
        return result;

    } }
