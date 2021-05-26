function exercici1(nomEntrat){
    let nom = Array.from(nomEntrat.toUpperCase());
    let imprimible = "";
    for (let i=0; i < nom.length; i++) {
        console.log(nom[i]);
        imprimible = imprimible + nom[i]+"<br>";
    }
    document.getElementById("modificable").innerHTML = "Exercici 1: <br>"+imprimible;
}

function exercici2(nomEntrat){
    let nom = Array.from(nomEntrat.toUpperCase());
    let imprimible = "";
    for (let i=0; i < nom.length; i++) {
        if (nom[i] == "A" || nom[i] == "E" || nom[i] == "I" || nom[i] == "O" || nom[i] == "U") {
            imprimible = imprimible + "He trobat la VOCAL: "+nom[i]+"<br>";
        } else {
        imprimible = imprimible + "He trobat la CONSONANT: "+nom[i]+"<br>";
        }
    }
    document.getElementById("modificable").innerHTML = "Exercici 2: <br>"+imprimible;
}

function exercici3(nomEntrat){
    let nom = Array.from(nomEntrat.toUpperCase());
    let mapa = new Map();
    let lletra;
    for (let i=0; i < nom.length; i++) {
        lletra = nom[i];
        if (mapa.has(lletra)) {mapa.set(lletra,(mapa.get(lletra)+1));}
        else {mapa.set(nom[i],1);}
    }
    let imprimible="";
    for (var [key, value] of mapa) {
        imprimible = imprimible +"("+ key + ", " + value+")";
    }
    document.getElementById("modificable").innerHTML = "Exercici 3: <br> {"+imprimible+"}";
}

function exercici4(nomEntrat, cognomEntrat){
    let nom = Array.from(nomEntrat.toUpperCase());
    let cognom = Array.from(cognomEntrat.toUpperCase());
    let fullname = (nom.concat("")).concat(cognom);
    document.getElementById("modificable").innerHTML = "Exercici 4: <br> ["+fullname+"]";
}

function exercici5(text){
    let mails = trobaMails(text);
    let imprimible = "";
    mails.forEach(element => {
        imprimible = imprimible + element + "<br>";
    });
    document.getElementById("modificable").innerHTML = "Exercici 5: <br>"+imprimible;
}

function trobaMails(text) {
    let llistaMails = [];
    let indexArroba = 0;
    let mail;
    do {
        indexArroba = text.indexOf("@", indexArroba+1);
        ultimEspai = text.lastIndexOf(" ", indexArroba)+1;
        seguentEspai = text.indexOf(" ", indexArroba);
        if (indexArroba > 0 && ultimEspai !== indexArroba && seguentEspai !== indexArroba) {
            mail = (text.substring(ultimEspai, seguentEspai)).replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
            if (mail.indexOf(".") !== mail.lastIndexOf(".")) {
                mail = mail.substring(0, mail.lastIndexOf("."));
            }
            if (!(llistaMails.includes(mail)) && mail.indexOf(".")>0) {
                llistaMails.push(mail);
            }
        }
    } while (indexArroba > 0);
    return llistaMails;
}
