// Exercici 3
let nom = ["A","N","T","O","N","I"];
let mapa = new Map();
let lletra;
for (let i=0; i < nom.length; i++) {
    lletra = nom[i];
    if (mapa.has(lletra)) {mapa.set(lletra,(mapa.get(lletra)+1));}
    else {mapa.set(nom[i],1);}
}
console.log(mapa);