


let button = document.getElementById('envoyer');


button.addEventListener('click' , function (event){
    //premierement quand on click sur le bouton formulaire il est envoyer
    // sur la page php or nous avons pas encore etudier php on empeche
    // le bouton d'envoyer le formulaire
    event.preventDefault();

    //on sait qu'on a 3 champs on peut deja les recuperer

    let champsNom = document.getElementById('nom');
    let champsPrenom = document.getElementById('prenom');
    let champsPassword = document.getElementById('password');
    //on peut directement prendre la valeur aussi
    let valueMail = document.getElementById('email').value;

    //maintenant je veux recuperer la valeur contenue dans chaqu'un des champs !!!

    let valueNom = champsNom.value;
    let valueprenom = champsPrenom.value;
    let valuePassword = champsPassword.value;
    //pour un select

    let select = document.getElementById('select');
    let selection = select.options[select.selectedIndex].value;

    console.log('ma selection a partir du select' + selection);

});

//maintenant pour un texte area

let textarea = document.getElementById('area');
let span = document.getElementById('max');

textarea.addEventListener('keypress', function (event){
    if(textarea.value.length < 250){
        span.innerHTML = 'il vous reste' + (250 - textarea.value.length) + 'caracteres';
    }
})

