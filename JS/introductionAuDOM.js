/**
*INTRODUCTION AU DOM
 */

/**
 *   recuperer un element sur base de son ID HTML
 */

/*
   recuperation par GETELEMENTBYID()
 */
//on recupere <p id="p1">paragraphe 1</p>

let paragraphe1 = document.getElementById("p1");//pas besoin de mettre le #
paragraphe1.innerHTML = "changer tout son contenu !"; //on change tout le contenue

// on peut ajouter du texte / du HTML a la suite du contenue deja en place dans l'element !
paragraphe1.innerHTML += "mon texte ajoute avec par exemple une balise <span>span en plus ! </span>";

//manipulation du style quand le style existe pas

// on peut changer le style css d'un elements
paragraphe1.style.backgroundColor = "darkgrey";
paragraphe1.style.fontWeight = "bold"; //tout sous forme de chaine de caractere double guillemets !

//astuce pour le taille.
paragraphe1.style.fontSize = "16px";
paragraphe1.style.fontSize = (16*2) + "px";

//admetton je veux deux foix la taille du texte actuelle
paragraphe1.style.fontSize = parseInt(paragraphe1.style.fontSize) * 2 + "px";

//on peut utiliser une propriete tout comme on utiliserai une variable !! important ca vous faciliteras la vie
let paragraphe2 = document.getElementById("p2");
paragraphe2.style.border = "1px dashed red";

/*** recuperation du troisieme paragraphe ***/

// jusqu'as present on creait des valeur qui venaient s'ajoutez dans l'atribut style c'est valable si la regle + valeur n'existe pas en CSS
/*admetton qu'on est pas encore entre de valeur avec style.quelquechose*/
//ici je recupere le PREMIER element qui dispose de la .classTest. querySelector renvoie toujour un seul element peut importe votre selecteur !
let paragraphe3 = document.querySelector(".classeTest");//avec la fonction querySelector utiliser les selecteur CSS
paragraphe3.style.fontSize = "100px";
//paragraphe3.style.left = "100px";// dans certains cas ca fonctionneras pas !
//solution
let cssStyle = window.getComputedStyle(paragraphe3);
let left = cssStyle.getPropertyValue("left");//ici on recupere une valeur calcule par le navigateur
console.log(left);
cssStyle.setProperty("left","4000px");//on remplace la valeur calculer par le navigateur par notre propre valeur
console.log(cssStyle.getPropertyValue("left"));//on doit a nouveaux recupere la valeur calculer


/**
 *  recuperer plusieurs elements
 */