/*console.log(ma_variable);

try {//la structure try...catch
    console.log(ma_variable);
} catch (e) {
    console.error("erreur");
}
//La structure try...finally : le bloc finaly et éxécuté quelque soit le résultat de l'éxécution du bloc try

try {//la structure try...catch...finaly
    console.log(ma_variable);
} catch (e) {
    console.error("erreur");
}
finally{

    console.info("après le bloc try");
}*/
function division(a,b){//Lancer une exception avec throw

    if (b===0){
        throw "Erreur : Division par zéro";
    }
    return a/b;
}
try{

    var c =division(2,0);
    console.log(c);
}
catch(erreur){
    console.log(erreur);
}
