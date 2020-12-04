
//premiere chose dans une condition le test porte a chaque fois sur des valeur identique
//un nombre avec un nombre et chaine de caractere avec haine de caractere

let monNombre =4;

//j'aimerais savoir si ma variable et plus grande que 5
// si pas j'affiche un message d'erreur "mon nombre n'est pas plus grand que 5

if(monNombre > 5){
    console.log("je suis plus grang que 5");
}
else {
    console.log("je suis pas plus grand que 5");
}

//j'aimerais faire la meme chose mais avec la valeur 4 et inverse

if( monNombre < 5){
    console.log("je suis plus petit que 5");
}
else{
    console.log("je suis plus grand que 5");
}

//si mon nombre est plus petit que 4 le dire dans la console si il est plus grand que 6 le dire en console
//pour tous les autres cas indiquer sa valeur en console

if (monNombre < 4 ){
    console.log("je suis plus petit que 4");
}
else if (monNombre > 6){
    console.log("je suis plus grand que 6");
}
else {
    console.log("ma valeur est: " + monNombre);
}

//je veux savoir si le nombre d'element que je recupere et egal a 6

let mesParagraphe = document.getElementsByTagName("p");

if (mesParagraphe.length === 6){//la propriete length nous donne le nombre d'elements dans la liste
    console.log("mes paragraphe sont egaux a 6");
}
else{
    console.log("il y a " + mesParagraphe.length + " paragraphes");
}

//maintenant si je veux tester que deux chaine de caractere sont egal (en taille)

let chaine1 = "tests";
let chaine2 = "hello";

if (chaine1.length === chaine2.length){
}

//si maintenant je veux verifier si elle sont egal en terme de contenu

if (chaine1 === chaine2 ){
}




/**
 * les boucles
 */

let i = 0;
while(i < 10){//ma variable i ira jusqu'a 9 compris
    console.log(i);
    i++;
}

//afficher pour chaque paragraphe le contenu du texte HTML

let paras = document.getElementsByTagName("p");

for (let i = 0; i < paras.length; i++){
    let unparagraphe = paras[i];
    console.log(unparagraphe.innerHTML);

}













