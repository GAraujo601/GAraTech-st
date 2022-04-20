//alert("Usando o js em outra pag")

//pegando a img do banner

let img= document.getElementById ("img-banner")

function anterior(){
    img.classList.toggle("anterior"); //adicionar ou remover uma classe automaticamente
}
function seguinte(){
    img.classList.toggle("seguinte");
    
}


//Estruturas condicinais: permite a mudança do fluxo de execução mediante uma condição

//*Criando um slide básico
/*
let indice=1;

function trocarimg(direcao){


    if(direcao ==="seguinte"){
        
        if(indice==1){
        img.src="img/bateria.iphone.png"
        indice=2;
        }

        else if (indice==2){
        img.src="img/bat-m.png"
        indice=3;
        }

        else if (indice==3){
        img.src="img/visor.png"
        indice=1;
        }
    }

    if(direcao ==="anterior"){
        
        if(indice==1){
            img.src="img/bat-m.png"
            indice=3;
        }
    
        else if (indice==2){
            img.src="img/visor.png.png"
            indice=1;
    
        }
    
        else if (indice==3){
            img.src="img/bateria.iphone.png"
            indice=2;
        }

    }   
 }
 */
