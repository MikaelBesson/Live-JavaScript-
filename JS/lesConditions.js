/**
 * les conditions
 */

//une condition sert a executer un bout de code lorsq-un test est true
// si le test et false le test est ignoré!!

    //if === SI
    //else = SINON


let age = 19;

if(age < 18) {
    //vous ete libre d'ajoutez autant de code que vous le souhaiter ici!!!
    console.log("vous ete mineur");
}

//si c'est faut le code reprend ici

else {
    console.log("vous ete majeur");
}

// si on as besoin de tester qu'une valeut on peut ce passer du else

let day =24; //prompt("entrez un jour");//prompt cree une boite de dialogue qui demande a l'utilisateur
day = parseInt(day);// parseint transforme une chaine en number quand c'est possible
let message = "hello nous somme le ";

if(day === 24){
    day = "soir de noel";
}
console.log(message + day);

//technique pour etre sur

console.log(parseInt("35"));
console.log(parseInt("test"));//vous obtiendrai NaN -->Not A Number
//quand vous faite un prompt vous ete jamais sur que l'utilisateur va entrez un nombre
//de maniere generale ne jamais croire ce que l'utilisateur vous dit
let dataNumber = prompt("donnez moi un nombre");
dataNumber = parseInt(dataNumber);
if(isNaN(dataNumber)) {//la fonction isnan() verifie si une variable et differente d'un nombre apres un parseint()
    console.log("wesh gros ca c'est pas un nombre");
    dataNumber =0;//si c'est pas un nombre alors on peut decider que la variable seras egale a 0.
}

//maintenant on est certains que datanumber contient un nombre et pas autre chose!!
console.log("la valeur de datanumber est:" +dataNumber);

//on aimerai faire quelque chose si les nombres sont 2 - 3 - 4 - 5 - 6, autre chose si c'est pas le cas.

if(dataNumber === 2){
    console.log("datanumber vaut actuellement 2");
}
else if(dataNumber === 3) {
    console.log("datanumber vaut actuellement 3");
}
else if(dataNumber === 4){
    console.log("datanumber vaut actuellement 4");
}
else if(dataNumber === 5){
    console.log("datanumber vaut actuellement 5");
}
else if(dataNumber === 6){
    console.log("datanumber vaut actuellement 6");
}
//dans tous les autres cas
else {
    console.log("datanumber vaut actuellement autre chose que 2 3 4 5 6");
}

//on peut faire beaucoup plus court en utilisant switch
//swicht permet de tester differente valeur pour une variable donnee.
//on sait qu'on as une variables datanumber et on sait que soit elle vaut 2 3 4 5 ou 6 ou autre chose

switch(dataNumber) {
    case 2:
        console.log("datanumber vaut actuellement 2");
        break;
    case 3:
        console.log("datanumber vaut actuellement 3");
        break;
    case 4:
        console.log("datanumber vaut actuellement 4");
        break;
    case 5:
        console.log("datanumber vaut actuellement 5");
        break;
    case 6:
        console.log("datanumber vaut actuellement 6");
        break;
    default:
        console.log("datanumber vaut actuellement autre chose que 2 3 4 5 6");
}

/**
 * les operateur logique
 * && -->AND-->ET en francais
 * || -->OR-->OU en fr
 * !  -->NOT-->NON en fr
 */

//quasiment tout le temps utiliser dans des condition
//par exemple je veux tester que a soit plus petit que 5 et que b soit plus grand que 6
let a = 4;
let b = 7;
//jusqu'a present on pouvez tester que sur une variable il est possible de tester plusieurs
//teston que a<5 et b>6


if(a < 5 && b > 6) {
    console.log("A est plus petit que 5 et B et plus grand que 6");
    console.log("si b avait ete plus petit on aurait pas put rentrer");
}






