function addition(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)+Number(b);
    t3.value = c;
}

function soustraction(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)-Number(b);
    t3.value = c;
}

function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)/Number(b);
    t3.value = c;
}

function multiplication(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)*Number(b);
    t3.value = c;
}

function paire(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)+Number(b);
    if (c %2==0)
    t4.value = "paire";
    else
    t4.value = "impaire";
}

function permutation(){
    var c ="";
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    c=a
    a=b
    b=c
    t1.value = a
    t2.value = b
}
