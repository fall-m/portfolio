function calcul_moyenne(){
    var n1= prompt("Donner la première note: ");
    var n2= prompt("Donner la deuxième note :");
    var n3= prompt("Donner la trosième note :");

    var somme=Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+"<br> ");
    var moyenne=somme/3;

    document.write ("Voici la moyenne: "+moyenne+"<br> ");

    if (moyenne >=10)
        document.write ("Vous êtes admis"+"<br> ");
    else
        document.write ("Vous n'êtes pas admis"+"<br> ");
}

function test_age(){
    var age = prompt("Donner votre age :")
    if (age >=18){
        document.write("Vous êtes majeur."+"<br>")
        document.bgColor="red"
    }
    else{
        document.write("Vous n'êtes pas majeur."+"<br>")
        document.bgColor="red"
    }
}

function simple_affichage(){
    var nom=prompt("Donnez votre nom")
    var prenom=prompt("Donnez votre prénom")
    document.write('<div style="margin:auto; width:300px; border:2px solid blue; "')
    document.write('Bonjour ${prenom} ${nom}')
    document.write('</div>')
}

function changer_couleur(){
    var couleur = prompt("choisir une couleur")
    if (couleur=="rouge" || couleur=="ROUGE" || couleur=="Rouge"){
        document.body.style.background="red"
    }
    else if (couleur=="bleu" || couleur=="BLEU" || couleur=="Bleu"){
        document.body.style.background="blue"
    }

    else if (couleur=="vert" || couleur=="VERT" || couleur=="Vert"){
        document.body.style.background="green"
    }
}