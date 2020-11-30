/* les operateur ternaire
*
*/
//les ternaire sont a utiliser avec parcimonie

let a = 1;
let message;

if( a === 1 ) {
    message = "a est egal a 1";
}
else {
    message = "a est different de 1";
}
console.log(message);

//le ternaire n'est utile que si vous avez une structure conditionnelle simple
//utile lorsqu'on as qu'une affectation a effectuer !! pas utile quand plusieur operation dans le bloc de code
//ICI ==> on pose la question ( a est il egal a 1 ) ?
//      quoi retourner si OUI : quoi retourner si NON --> TRUE : FALSE ce qui est retourner est avant les :

//      DONC ==> question ? OUI : NON
message =(a === 1 ) ? "a est egal a 1" : "a est different de 1"; // ici c'est TRUE ce qui est retourner et avant les :
console.log(message);

a = 2;
//      DONC ==> question ? OUI : NON
message =(a === 1 ) ? "a est egal a 1" : "a est different de 1"; // ici c'est FALSE ce qui est retourner et apres les :
console.log(message);

