function fonction0(){
    var chaine_test= prompt("entrer une chaîne de caractère");
    document.getElementById('resultat').contentWindow.document.open();
    document.getElementById('resultat').contentWindow.document.write("<h2>Résultat : </h2>"+chaine_test);
    document.getElementById('resultat').contentWindow.document.close();
    var correction = 'var chaine_test= prompt("entrer une chaîne de caractère");<br>document.getElementById("resultat").contentWindow.document.open();<br>document.getElementById("resultat").contentWindow.document.write(chaine_test);<br>document.getElementById("resultat").contentWindow.document.close();'
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction1(){
    var a = 10;
    var b = 20;
    var result = a + b;
    alert(result);
    var correction="var a = 10;<br>var b = 20;<br>var result = a + b;<br>alert(result);"
    document.getElementById('resultat').contentWindow.document.open();
    document.getElementById('resultat').contentWindow.document.write("");
    document.getElementById('resultat').contentWindow.document.close();
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
    
    
}

function fonction2(){
    let note_maths = 11;
    let note_francais = 9;
    let note_hg = 16;
    let moyenne = (note_maths+note_francais+note_hg) / 3;
    alert('La moyenne es de ' + moyenne);
    var correction = "let note_maths = 11;<br>let note_francais = 9;<br>let note_hg = 16;<br>let moyenne = (note_maths+note_francais+note_hg) / 3;<br>alert('La moyenne es de ' + moyenne);"
    document.getElementById('resultat').contentWindow.document.open();
    document.getElementById('resultat').contentWindow.document.write("");
    document.getElementById('resultat').contentWindow.document.close();
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction3(){
    var budget = prompt("quel est votre budget ?");
    var achat = prompt("Combien va valloir votre achat ?");
    if(achat<=budget){
        alert("Votre budget de "+budget+"€ permet d'acheter l'objet qui vaut "+achat+"€");
    }
    else{
        alert("Votre budget de "+budget+"€ ne permet pas d'acheter l'objet qui vaut "+achat+"€");
    }
    var correction = "var budget = prompt('quel est votre budget ?');<br>var achat = prompt('Combien va valloir votre achat ?');<br>if(achat<=budget){<br>alert('Votre budget de '+budget+'€ permet d'acheter l'objet qui vaut '+achat+'€');<br>}<br>else{<br>alert('Votre budget de '+budget+'€ ne permet pas d'acheter l'objet qui vaut '+achat+'€');<br>}"
    document.getElementById('resultat').contentWindow.document.open();
    document.getElementById('resultat').contentWindow.document.write("");
    document.getElementById('resultat').contentWindow.document.close();
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}