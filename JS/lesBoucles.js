/*
*les boucles
 */
/*
la boucle WHILE
 */

let elements = document.getElementsByTagName("p"); //on recupere tout les elements de type paragraphe (TOUS) il y en as plusieurs
console.log(elements);//on as bien plusieurs elements.
console.log("test de la taille de collection: " + elements.length);//la propriete length contient le nombre d'element recuperer.

//pour acceder a chaque elements il faudras boucler sur la collection ! pas d'autre choix !!

let i =0; //on dit souvent qu'un passage dans la boucle est une iteration

while (i < elements.length) {// ici nous avons 8 elements la proprieter length contient la valeur "8"
    //on aurait pu recuperer l'element individuel de la maniere suivante
    let demoCrochetsParagraphe = elements[i];

   let paragraphe = elements.item(i);// on recupere a chaque fois un element d'index i
    console.log("element : " + paragraphe + " " + i);
    paragraphe.innerHTML = "je suis le paragraphe d'index " + i;

    i++; //corespond a i = i + 1 ou encore i += 1
}

/*
la boucle DO...WHILE
 */
i = 0;
let spans = document.getElementsByTagName("span");
console.log("il y a un nombre total de " + spans.length + "spans");

do {
    //meme principe que pour la boucle while sauf qu'on passe au moins une fois dans la boucle
    console.log("je suis passez dans la boucle !, a l'heure actuelle i vaut: " + i);
    i++;
}
while(i < spans.length);


/*
la boucle FOR
 */
let i1 = 0;
while(i1 < 10) {
    console.log("il vaut : " + i1);
    i1++;
}
//variable : condition : incrementation
for(let i1 = 0; i1 < 10; i1++) {
}

let elementsFor = document.getElementsByClassName("maClasse");//pas besoin du point sauf si query selector() ou queryselectorall ()
for(let item = 0; item < elementsFor.length; item++) {
    let pMaClasse = elementsFor[item]; //on aurait pu utiliser aussi elementsFor.item(item);
    pMaClasse.style.fontSize = (item + 1) * 5 + "px";
}

let test = 0;
while(test < 10) {
    console.log("mon test vaut " + test);
    test++;
}

for(let test =0; test < 10; test++) {
    console.log("deuxieme test vaut: " + test);
}