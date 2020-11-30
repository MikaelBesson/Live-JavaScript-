//les operateur de comparaison ce qui seras retourner (resultat) est toujour un boolean -->soit true soit false
// qui dit retour dit variable ou structure de controle (if while etc... que l'on voit au prochain live!!

//petite demo
/**
*test l'egalite entre deux valeur
 * je ne vous recommande pas d'utiliser le double egal
 */
console.log("OPERATEUR ==");

let result1 = true == true; //retourne true
let result2 = true == false;// retourne false
let result3 = false == false;//retourne true
let result4 = true == 1;
let result5 = true == 2;
let result6 = true == "1";
let result7 = true == "true";
let result8 = false == 0;
let result9 = false == "0";
let result10 = false == "false";

console.log("result1 vaut:" + result1 + "--> true == true");
console.log("result2 vaut: " + result2 + "-->true == false");
console.log("result3 vaut:" + result3 + "-->false == false");
console.log( "result4 vaut" + result4 + "-->true == 1");
console.log("result5 vaut: " + result5 + "-->true == 2");
console.log("result6 vaut:" + result6 + "-->true == \"1\"");
console.log("result7 vaut" + result7 + "-->true == \"true\"");
console.log("result8 vaut" + result8 + "-->false == 0");
console.log("result9 vaut" + result9 + "-->false == \"0\"");
console.log("result10 vaut" + result10 + "-->false == \"false\"");

/**
 * teste l'egalite entre deux valeur et prend en compte le type de donnees
 */
console.log("OPERATEUR ===");

 result1 = true === true;
 result2 = true === false;
 result3 = false === false;
 result4 = true === 1;
 result5 = true === 2;
 result6 = true === "1";
 result7 = true === "true";
 result8 = false === 0;
 result9 = false === "0";
 result10 = false === "false";


console.log("result1 vaut:" + result1 + "--> true === true");
console.log("result2 vaut: " + result2 + "-->true === false");
console.log("result3 vaut:" + result3 + "-->false === false");
console.log( "result4 vaut" + result4 + "-->true === 1");
console.log("result5 vaut: " + result5 + "-->true === 2");
console.log("result6 vaut:" + result6 + "-->true === \"1\"");
console.log("result7 vaut" + result7 + "-->true === \"true\"");
console.log("result8 vaut" + result8 + "-->false === 0");
console.log("result9 vaut" + result9 + "-->false === \"0\"");
console.log("result10 vaut" + result10 + "-->false === \"false\"");

//egalite avec differente valeur

let result11 = 1 === 1;// on compare a la fois la valeur et le type le resultat sera true
let result12 = 1 === 0;// on compare a la fois la valeur et le type le resultat sera false
let result13 = -35 === 52;//on compare a la fois la valeur et le type le resultat sera false
let result14 = "-35" === -35;//on compare a la fois la valeur et le type le resultat sera false
let result15 = "-35" === "-35";//on compare a la fois la valeur et le type le resultat sera true
let result16 = "mon texte" === "mon texte 2";//on compare a la fois la valeur et le type le resultat sera false
let result17 = "mon test" === "mon test";//on compare a la fois la valeur et le type le resultat sera true

console.log("result11 vaut" + result11 + "==> 1 === 1");
console.log("result12 vaut" + result12 + "==> 1 === 0");
console.log("result13 vaut" + result13 + "==> -35 === 52");
console.log("result14 vaut" + result14 + "==> -35 === 35");

/**
 * teste l'operation entre deux valeur et prend en compte le type de donnees
 * je prefere que vous utilisiez pqs le != mais plutot le !==
 */

console.log("OPERATEUR !==");

let result18 = 1 !== 1;// on compare a la fois la valeur et le type le resultat sera false car type est valeur identique
let result19 = 1 !== 0;// on compare a la fois la valeur et le type le resultat sera true car type identique mais valeur differente
let result20 = -35 !== 52;//on compare a la fois la valeur et le type le resultat sera true car type identique mais valeur differente
let result21 = "-35" !== -35;//on compare a la fois la valeur et le type le resultat sera true car type different mais valeur identique
let result22 = "-35" !== "-35";//on compare a la fois la valeur et le type le resultat sera false car type et valeur identique
let result23 = "mon texte" !== "mon texte 2";//on compare a la fois la valeur et le type le resultat sera true car type identique mais valeur differente
let result24 = "mon test" !== "mon test";//on compare a la fois la valeur et le type le resultat sera false car type est valeur identique

console.log("result18 vaut" + result18 + "==> 1 !== 1");
console.log("result19 vaut" + result19 + "==> 1 !== 0");
console.log("result20 vaut" + result20 + "==> -35 !== 52");
console.log("result21 vaut" + result21 + "==> -35 !== 35");
console.log("result22 vaut" + result22 + "==> \"-35\" !== \"-35\"");
console.log("result23 vaut" + result23 + "==> \"mon texte\" !== \"mon texte 2\"");
console.log("result24 vaut" + result24 + "==> \"mon test\" !== \"mon test\"");

/**
 * > teste la valeur de gauche est plus grande que la valeur de droite !!!!
 */
console.log("OPERATEUR >");

let chaineDemo = "hello world";

let result25 = 5 > 6; //le resultat est false car 5 est bien plus petit que 6
let result26 = 6 > 5;// le resultat est true car 6 est plus grand que 5
let result27 = 6 > 6;// false car les valeur sont identique
let result28 = 6 > "hello";//false puisque je compare un nombre et une chaine ca n'a pas de sens
let result29 = 6 > "hello".length;//true car 6 est plus grand que les 5 lettres de hello length contient la longueur de la chaine de caractere
let result30 = 6 > chaineDemo.length;//false car 6 est plus petit que la chaine de caractere "hello world"

console.log("6 est il plus grand que hello:" + result28);
console.log("6 est il plus grans que la taille de la chaine hello(5)" + result29);
console.log("6 est il plus grand que la longueur de la chaine contenu dans chaineDemo(11):" + result30);

/**
 *  < teste la valeur de gauche est plus petite que la valeur de droite !!!!
 */
console.log("OPERATEUR <");

let result31 = 5 < 6;//true
let result32 = "hello world".length <10;// hello world(11) < 10 false

console.log("5 est il plus petit que 6:" + result31);
console.log("hello world est il plus petit que 10:" + result32);


/**
 * >= teste la valeur de gauche est plus grande ou egal que la valeur de droite !!!!
 */
console.log("OPERATEUR <=");

let result33 = 6 >= 6; //true car 6 et bien plus grand ou egal a 6

console.log("6 est il plus grand ou egal a 6:" + result33);


/**
 * <= teste la valeur de gauche est plus petite ou egal que la valeur de droite !!!!
 */
console.log("OPERATEUR <=");
let result34 = 6 <= 6; //true car 6 et bien plus petit ou egal a 6

console.log("6 est il plus petit ou egal a 6:" + result34);


