console.log("Kaunis Vaasa - Finland");

//let katsoKuva = "0Kuva";

let pic = document.getElementById("kuva0");

//let kuvat = ["img_0", "img_"]

let kuvat = [];
for (let index = 0; index <21; index++) {
    kuvat[index] = "img_"+index;
}

console.log(kuvat);

let kuvatLength = kuvat.length;
let numero=0;

function omaFunktio() {
    pic.src = kuvat[numero]+".jpg";
    numero=numero+1;
    if(numero==kuvatLength) {
        numero=0;  
    }  
}

