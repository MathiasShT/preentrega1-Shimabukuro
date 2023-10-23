alert('Primera preentrega');

let eleccion = prompt('Ingresar numero del 0 al 36');

let saldo = 100;
let apuesta = 5;
let ronda = 0;

while (saldo>=apuesta){

ronda +=1;
console.log('--------Ronda:'+ronda+'---------');
console.log(eleccion);

function tirada(){
   let azar = Math.floor(Math.random()*36);
   console.log(azar)
}

if (tirada() != eleccion){
    saldo -= apuesta}
else if(tirada() == eleccion){
    saldo += apuesta*36
}
console.log('Saldo='+ saldo)

}