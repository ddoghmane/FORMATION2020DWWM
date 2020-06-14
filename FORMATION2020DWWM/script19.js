var a = 0;//La boucle while la conditions est éxécuté avant le bloc de code
while(a<10){
console.log("valeur de a:"+a) ;
    a++;//Incrémenter la variable a ou boucle infini


}

var a = 0;//La boucle do while le bloc de code est écécuté au moins une fois
do{
    a++;
    console.log("la valeur de a : "+a);
    
}while(a<10);

for(var a = 0;a<10;a++)//La boucle for
console.log(a);

var arr = ["un","deux","trois"];//La boucle for in
for(var ind in arr){

    console.log(arr[ind]);
    
}
var arr = ["un","deux","trois"];//La boucle for... of nvtés ECMAScript6
    
for(var value of arr){
    console.log(value);
    
}