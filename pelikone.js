window.onload=inicio;

// Se usa el array kuvat para las imagenes

let premios =["amor", "salud", "dinero", "amistad", "viajes"]; // Mensajes numerados deacuerdo a la numeración de las pics

let numeros_actuales=[];

function inicio(){
    document.getElementById("tirar").onclick=lanzar_inicio;
}

function lanzar_inicio(){

    numeros_actuales=[];

    let maximo = document.getElementsByClassName("ventana").length;

    for (let k=0;k<maximo;k++){
        numeros_actuales.push(escoger_numero());
        mostrar_imagen(k,numeros_actuales[k]);
    }
    console.log(numeros_actuales);

    comparar();
}

function escoger_numero(){
    let azar=Math.floor(Math.random() * 3);  //kuvat.lenght=5
    return azar;
}

function mostrar_imagen(num,im){

    document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src=kuvat[im];
    
}

function comparar(){

   const mensaje = document.getElementById("mensaje");

   if(numeros_actuales[0]==numeros_actuales[1] && numeros_actuales[1]==numeros_actuales[2]){
        //let nuevoMensaje = premios[numeros_actuales[0]];
        
        mensaje.innerText = premios[numeros_actuales[0]];
        console.log(numeros_actuales[0]);
   }

}

function actualizar(){

}



function cerrar(){

}

function sonar(){

}