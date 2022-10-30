
function calcular_presupuesto(){
var objeto = Boolean
var vidrio = Boolean   
var cliente = Boolean
if (document.getElementById ('radio-papel').checked){
    objeto = false
    vidrio = true
} if (document.getElementById ('radio-bastidor').checked){
    objeto = false
    vidrio = false
} if (document.getElementById ('radio-objeto').checked){
    objeto = true
    vidrio = true
}

var alto = document.getElementById ('alto').value;
var ancho = document.getElementById ('ancho').value;
var profundidad = document.getElementById ('profundidad').value;

var largoVarilla = alto*2 + ancho*2 + 200;
var costVarilla = (largoVarilla/1000)*215;
var supVidrio = ((alto+10) * (ancho+10))/1000000;

if (vidrio == true) {   
    var costVidrio = (supVidrio*500)/10000;
    var costFibro = costVidrio/2
} else {
    var costVidrio = 0
    var costFibro = 0
}
if (objeto == true) {
    var costObjeto = ((largoVarilla-200)*profundidad*25)/1000
} else {
    var costObjeto = 0
}

//var costTotal = costVidrio + costVarilla + costFibro + costObjeto;
var presupuesto1 = ~~(costVarilla*5 + (costVidrio + costFibro + costObjeto)*3)
var presupuesto2 = ~~((costVarilla*5 + (costVidrio + costFibro + costObjeto)*3)*0.9)
console.log (objeto)
console.log (vidrio)
console.log (alto)
console.log (ancho)

console.log (supVidrio)
console.log (costVidrio)
console.log (costFibro)

console.log (largoVarilla)
console.log (costVarilla)
console.log (costObjeto)

console.log (presupuesto1)
console.log (presupuesto2)
if (document.getElementById ('radio-cliente').checked){
    cliente = true
alert ('Su presupuesto para este trabajo seria de $' + presupuesto1)
} else {
alert ('Su presupuesto para este trabajo seria de $' + presupuesto2) 
}


}
