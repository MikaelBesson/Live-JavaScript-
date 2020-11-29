/**
 *operateur arithmetiques
 */


/**** addition ****/
let result = 5 + 5;//addition simple rsult contient la valeur 10
result = result + 6;//on peut reutiliser la variable comme on veut et meme ecraser la valeur
//maintenant result contient 16 !!

//un peu plus dur avec 2 variables
let x =10;
let y = 1;
let resXY = x + y;
console.log("le resultat de x + y est:" + resXY);


/**** soustraction ****/
let resSoustraction = 5 - 4;
resSoustraction = resSoustraction -1;
resSoustraction = resSoustraction -2;



/**** multiplication ****/
let resMult = 5 * 5;
let z = 5, w = 3;
resMult = resMult +3;




/**** division ****/
let resDiv = 5 / ( z + x);


/**** exponentielle ****/
let resExpo = 5 ** 2; // corespond a 5 * 2
let resExpo2 = 5 ** 3; //corespond a 5*5*5
let resExpo3 = 5 ** 4; //corespond a 5*5*5*5



/**** modulo ****/
console.log(z / w); //on teste le resultat d'une division classique
//quand on fait un modulo on garde le reste d'une division on recupere ce qui n'a pas put etre diviser
console.log("resultat modulo" + (z % w));//z=5 et w=3 comme 3 ne peut etre contenu qu'une fois dans  5
// modulo nous donne le reste qui n'a pas etait diviser donc 2

let nb1 = 6;
let nb2 = 7;
let multiple =3;

if((nb1 % multiple) === 0) {
    console.log(nb1 + "est multiple" + multiple)
}
else {
    console.log(nb1 + "n'est pas multiple" + multiple)
}







