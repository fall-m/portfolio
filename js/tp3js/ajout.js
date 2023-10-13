function ajouterElement(){
    var nouvelElement = document.getElementById('nouvelElement').value;
    if(nouvelElement.trim() !==''){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(nouvelElement));
        document.getElementById('maListe').appendChild(li);
        document.getElementById('nouvelElement').value='';
    }
    else{
        alert('Veuillez entrez un élément valide')
    }
}