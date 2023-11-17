function seconnecter() {
    var login = prompt("Donnez votre nom d'utilisateur")
    var password = prompt("Entrez votre mot de passe")
    if(login=="admin" && password =="admin"){
        document.write("Bienvenue : "+login);
    }
    else{
        alert("accès refusé");
    }
}

function seconnecter2(){
    window.location.href="identification.html"
}

function login() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("h1").value;
    if(a=="admin" && b=="admin"){
        window.location.href="yes.html"
    }
    else{
        window.location.href="no.html"
    }
}

function affichagetab(){
    document.write("<table border=2px width=30%")
    for(let i=0;i<=5;i++){
        document.write("<tr><td>*</td><td>*</td><tr>")
    }
    document.write("</table>")
}

function affichagetab2(){
    var n1 = prompt("Définir le nombre de ligne du tableau")
    document.write("<table border=2px width=30%")
    for(let i=1;i<=n1;i++){
        document.write("<tr><td>"+i+"</td><td>*</td><tr>")
    }
    document.write("</table>")
}

function swich(){
    var color = prompt("entrez une couleur")
    switch(color){
        case "rouge" : document.body.style.background="red";
        break;
        case "ROUGE" : document.body.style.background="red";
        break;
        case "bleu" : document.body.style.background="blue";
        break;
        case "BLEU" : document.body.style.background="blue";
        break;
        case "vert" : document.body.style.background="green";
        break;
        case "VERT" : document.body.style.background="green";
        break;
        default:alert("couleur non définie")

    }
}

function cdc(){
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient "+chaine.length+" caractères "+"<br>");
    document.write("la première lettre est "+chaine.substr(0,1)+"<br>");
}

function seconnecter3(){
    
    var i = 0;

    do {
        var login = prompt("Donnez votre nom d'utilisateur");
        var password = prompt("Entrez votre mot de passe");
        if(login=="admin" && password =="admin")
        {
            document.write("Bienvenue : "+login);
            break;
        }
        else
            alert("accès refusé");
            i++;
    } while (i < 3);
    if(i==3)
    alert("nombre de tentative expiré");
}

function pageAjout(){
    window.location.href="ajouter.html";
}

function bonus(){
    var testa = ""
    var total=""
    var prixTTC = 0
    do{
        var article = prompt("votre article");
        var prix = prompt("quel prix");
        var quantite = prompt("quel quantité");
        alert("vos "+article+" vous coûterons"+price*quantite);
        total = Number(prix)*Number(quantite);
        prixTTC += total;
        testa = testa + ("article : "+artcile+"<br> Prix : "+prix+"€"+"<br> Quantité : "+quantite+"<br> Total : "+total+"€"+"<br>")
        alert("le coût total de vos articles est de "+prixTTC+"€");

        var reponse = prompt("voulez vous acheter d'autres articles ? (oui/non)");
    }while(reponse != "non");
    document.write(testa);
    document.write('Prix TTC : '+prixTTC+"€");
}