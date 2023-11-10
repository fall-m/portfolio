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
        document.write("<tr><td>*</td><td>*</td><tr>")
    }
    document.write("</table>")
}