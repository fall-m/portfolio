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

function fonction4() {
    let ht = prompt("Montant HT ?");
    let ttc = parseFloat(ht) * 1.2;
    var correction = "let ht = prompt('Montant HT ?');<br>let ttc = parseFloat(ht) * 1.2;<br>brdocument.body.innerText = ttc;"
    document.getElementById('resultat').contentWindow.document.open();
    document.getElementById('resultat').contentWindow.document.write("<h2>Résultat : </h2>"+ttc);
    document.getElementById('resultat').contentWindow.document.close();
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction5() {
    let ht = prompt("Montant HT ?");
    let taux_tva = prompt("Taux de TVA ?");
    let taux_tva_calcul = (parseFloat(taux_tva) / 100) + 1;
    let ttc = ht * taux_tva_calcul;
    var correction = 'let ht = prompt("Montant HT ?");<br>let taux_tva = prompt("Taux de TVA ?");<br>let taux_tva_calcul = (parseFloat(taux_tva) / 100) + 1;<br>let ttc = ht * taux_tva_calcul;<br>document.body.innerText = ttc;'
    document.getElementById('resultat').contentWindow.document.open();
    document.getElementById('resultat').contentWindow.document.write("<h2>Résultat : </h2>"+ttc);
    document.getElementById('resultat').contentWindow.document.close();
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction6() {
    let ht = prompt("Montant HT ?");
    let taux_tva = prompt("Taux de TVA ?");
    let ttc = ht * (parseFloat(taux_tva) / 100 + 1);

    if (ttc > 100) {
        document.getElementById('resultat').contentWindow.document.open();
        document.getElementById('resultat').contentWindow.document.write("<h2>Résultat : </h2>"+'<h1 style="color: red;">' + ttc + '</h1>');
        document.getElementById('resultat').contentWindow.document.close();
    } else {
        document.getElementById('resultat').contentWindow.document.open();
        document.getElementById('resultat').contentWindow.document.write("<h2>Résultat : </h2>"+'<h1 style="color: green;">' + ttc + '</h1>');
        document.getElementById('resultat').contentWindow.document.close();
    }
    var correction = 'let ht = prompt("Montant HT ?");<br>let taux_tva = prompt("Taux de TVA ?");<br>\
    let ttc = ht * (parseFloat(taux_tva) / 100 + 1);<br>if (ttc > 100) {<br>\
        document.body.innerHTML = "<h1 style="color: red;"> + ttc + </h1>";<br>\
    } else {<br>document.body.innerHTML = "<h1 style="color: green;">" + ttc + "</h1>";<br>}'
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction7(){
    window.location.href="fonction7.html";
    document.getElementById('cocktail').innerText = 'Long Island Iced Tea';
}

function fonction8() {
    for (let i = 10; i <= 1000; i += 10) {
        console.log(i);
    }
    var correction = 
        "for (let i = 10; i <= 1000; i += 10) {<br>\
        console.log(i);<br>\
        }"
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction9(){
    let age = prompt('Quel est votre âge ?');
if(age >= 18) {
   alert('Vous êtes majeur !');
} else {
   alert('Vous êtes mineur !');
}
var correction = "    let age = prompt('Quel est votre âge ?');<br>\
if(age >= 18) {<br>\
   alert('Vous êtes majeur !');<br>\
} else {<br>\
   alert('Vous êtes mineur !');<br>\
}"
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction10() {
  let cp = 77000;
  while (cp <= 77999) {
    console.log(cp);
    cp++;
  }
  var correction = "let cp = 77000;<br>\
  while (cp <= 77999) {<br>\
    console.log(cp);<br>\
    cp++;<br>\
  }"
    document.getElementById('correction').contentWindow.document.open();
    document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
    document.getElementById('correction').contentWindow.document.close();
}

function fonction11() {
  let n = 5;
  let html = " ";
  for (let i = 1; i <= 10; i++) {
    let multiplication_5 = n + "X" + i + "=" + n * i + "<br>";
    html += multiplication_5;
    console.log(multiplication_5);
  }
  document.write(html);
  var correction = 'let n = 5;<br>\
  let html = " ";<br>\
  for (let i = 1; i <= 10; i++) {<br>\
    let multiplication_5 = n + "X" + i + "=" + n * i + "<br>";<br>\
    html += multiplication_5;<br>\
    console.log(multiplication_5);<br>\
  }'
  document.getElementById('correction').contentWindow.document.open();
  document.getElementById('correction').contentWindow.document.write("<h2>Correction : </h2>"+correction);
  document.getElementById('correction').contentWindow.document.close();
}

function fonction12() {
    let html = " ";
    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            html = html + i;
        }
        html = html + "<br/>";
    }
    document.body.innerHTML = html;
}

function fonction13() {
    let html = " ";
    let nbre = 0;
    let k = 0;

    while (nbre <= 20) {
        html = html + k + "<br/>";
        nbre = nbre + 2;
        k = k + 2;
    }

    document.body.innerHTML = html;
}

function fonction14() {
    let tableau = '<table>';
    let lignes = 5;
    let colonnes = 3;

    for (let i = 1; i <= lignes; i++) {
        tableau = tableau + '<tr>';
        for (let k = 1; k <= colonnes; k++) {
            tableau = tableau + '<td>yolo</td>';
        }
        tableau = tableau + '</tr>';
    }

    tableau = tableau + '</table>';
    document.body.innerHTML = tableau;
}

function fonction15() {
    let lignes = prompt("Nombre de lignes ?");
    let colonnes = prompt("Nombre de colonnes ?");
    lignes = parseInt(lignes);
    colonnes = parseInt(colonnes);

    let tableau = '<table>';

    for (let i = 1; i <= lignes; i++) {
        tableau = tableau + '<tr>';
        for (let k = 1; k <= colonnes; k++) {
            tableau = tableau + '<td>yolo</td>';
        }
        tableau = tableau + '</tr>';
    }

    tableau = tableau + '</table>';
    document.body.innerHTML = tableau;
}

function fonction16() {
    let html = "<ul>";
    for (let i = 0; i < 11; i++) {
        html = html + "<li>" + Math.floor(Math.random() * 100) + "</li>";
    }
    html = html + "</ul>";
    document.body.innerHTML = html;
}

function fonction17() {
    let html = '<ul>';
    let nalea = 10;
    for (let i = 0; i < nalea; i++) {
        let tmp = Math.floor(Math.random() * 11);
        if (tmp === 10) {
            console.log('Le nombre 10 fait partie du tirage.');
        }
        html = html + '<li>' + tmp + '</li>';
    }
    html = html + '</ul>';
    document.body.innerHTML = html;
}

function fonction18() {
    let html = ['<ul>'];
    let nalea = 10;
    let nalea10 = 0;

    for (let i = 0; i < nalea; i++) {
        let tmp = Math.floor(Math.random() * 11);
        if (tmp === 10) {
            nalea10++;
        }
        html.push('<li>' + tmp + '</li>');
    }

    html.push('</ul>');
    html.push('<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>');
    document.body.innerHTML = html.join('');
}

function fonction19() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = color;
}