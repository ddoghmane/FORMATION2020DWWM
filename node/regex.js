const paris15 ='75015 Paris';
const avray = '92410 ville-d\'Avray';

//test du code postal uniquemet
console.log(paris15.match(/[0-9]{2}/));
console.log(paris15.match(/[0-9]{2,5}/));

//test du code postal et de la ville
console.log(paris15.match(/[O-9]{5}[a-zA-Z]+/));
console.log(paris15.match(/[O-9]{5}[a-z]+/i));

//test sur un nom de ville composé
console.log(avray.match(/[0-9]{5}[a-z]+/i));
console.log(avray.match(/[0-9]{5}[a-z'-]+/i));
