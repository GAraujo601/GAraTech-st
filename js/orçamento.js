//Seleção dos elementos
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let elementH2 = document.getElementById("txt-resultado");

function soma(){

let montagem = parseFloat (input1.value);
let peça = parseFloat (input2.value);
let resultado=montagem + peça;

elementH2.innerHTML= "Seu resultado é:" + resultado;

input1.value = "";
input2.value = "";
}