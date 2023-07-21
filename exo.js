const url = `https://blockchain.info/ticker`;

function recupererPrix(){
    //creer une requete
    let requete = new XMLHttpRequest();//creer un objet

    //creer une requete
    requete.open('GET', url); // premier parametre GET | POST, deuxieme parametre : url

    //GET sert a uttiliser uniquement une url
    //POST sert a envoyer des donnees comme si on passait par un formulaire

    //precise le retour attendu
    requete.responseType = `json`; // nous attendon en retour une reponse json

    //envoi de le requete 
    requete.send();

    //des qu on recoit une reponse, cette fonction est executee
    requete.onload = function(){
        //Verifie l etat de la requete et qu il est = a l etat de DONE
        if(requete.readyState  === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response; //on stocke la reponse

                let prixEnEuros = reponse.EUR.last;// on recupere le chemin du prix en euro qu on stock dans une variable
                document.querySelector(`#price_label`).textContent = prixEnEuros;//on affiche le prix du bc sur le site grace au selecteur 
                
                console.log(prixEnEuros);
            }
            else{
                alert(`Un probleme est intervenu, merci de revenir plus tard.`);
            }
        }
    }
    console.log(`Prix Actualiser`);
}

//on defini interval d actualisation du prix 
setInterval(recupererPrix, 5000);