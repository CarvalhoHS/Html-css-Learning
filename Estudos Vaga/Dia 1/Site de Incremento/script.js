num = 0
numero = document.getElementById('num').innerHTML
cont = document.getElementById('container')

function incrementar(){
    random = Math.floor(Math.random() * 100) + 1
    num = random
    document.getElementById('num').innerHTML = num
    console.log(numero)
}