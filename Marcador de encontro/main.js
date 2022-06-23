Lugar = Math.random() * 10
Comida = Math.random() * 10
Bebida = Math.random() * 10

function Escolha_Lugar(){
if(Lugar <= 1){
    document.getElementById("textoA").innerHTML = "Praia"
}
if(Lugar > 1 && Lugar < 4){
    document.getElementById("textoA").innerHTML = "Restaurante/bar"
}
if(Lugar > 4 && Lugar < 6){
    document.getElementById("textoA").innerHTML = "Casa"
}
if(Lugar > 6 && Lugar < 8){
    document.getElementById("textoA").innerHTML = "Trilha"
}
if(Lugar > 8 && Lugar < 10){
    document.getElementById("textoA").innerHTML = "Parque"
}
}

function Escolha_Comida(){
if(Comida <= 1){
    document.getElementById("textoC").innerHTML = "Comida de Festa Junina"
}
if(Comida > 1 && Comida < 4){
    document.getElementById("textoC").innerHTML = "Piquenique"
}
if(Comida > 4 && Comida < 6){
    document.getElementById("textoC").innerHTML = "Sushi"
}
if(Comida > 6 && Comida < 8){
    document.getElementById("textoC").innerHTML = "Hamburguer"
}
if(Comida > 8 && Comida < 10){
    document.getElementById("textoC").innerHTML = "Foundue"
}
}

function Escolha_Bebida(){
if(Bebida <= 1){
   document.getElementById("textoB").innerHTML = "Suco de Acerola"
}
if(Bebida > 1 && Bebida < 4){
    document.getElementById("textoB").innerHTML = "Vinho"
}
if(Bebida > 4 && Bebida < 6){
    document.getElementById("textoB").innerHTML = "Drinks"
}
if(Bebida > 6 && Bebida < 8){
    document.getElementById("textoB").innerHTML = "Refri"
}
if(Bebida > 8 && Bebida < 10){
    document.getElementById("textoB").innerHTML = "Suquinho e Agua"
}
}

console.log(Lugar)
console.log(Comida)
console.log(Bebida)