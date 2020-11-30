/**
 *les operateur d'affectation
 */


//exemple addition et affectation

let driveMyCar = 10;
let itBe = 1;
itBe = itBe + driveMyCar;//itBe vaut 11
itBe += driveMyCar;//on additionne itBe a driveMyCar et on affecte direct

console.log(itBe);


//exemple soustraction et affectation

let comeTogether = 10;
let heyJude = 0;
heyJude = heyJude - comeTogether;//heyjude vaut -10
heyJude -= comeTogether;


//exemple multiplication et affectation

let allMyLoving = 20;
let askMeWhy = 1;
askMeWhy = askMeWhy * allMyLoving;//askMeWhy vaut 20
askMeWhy *= allMyLoving;


//exemple division et affectation

let imagine = 5;
let anyTimeAtAll = 2;
// anytimeatall = anytimeattall / imagine
anyTimeAtAll /= imagine;



//exemple modulo et affectation
let chains =60;
let dontLeMeDown = 3;
dontLeMeDown %= chains;

/**
 * la concatenation
 * coller deux chaine ensemble ! on forme une grande chaine de caractere avec de petite chaine de caractere
 */
//il n'y a pas d'espace qui ce cree lorsque l'on colle deux chaines!!

let ch1 = "hello";
let ch2 = "world";
let ch3 = "how are you ?";


let concat = "december:"  + ch1 + ch2 + ch3;
let concat2 = `december: ${ch1} ${ch2} ${ch3}`;
console.log(concat);
console.log(concat2);



