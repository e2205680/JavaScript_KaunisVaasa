window.onload=inicio;

// Se usa el array kuvat creado en kaunisvaasa.js para las imagenes

// 21 Mensajes de premio
let premios =[
    "Unelmat eivät ole liian suuria, ne vain odottavat, että rohkeutesi kasvaa tarpeeksi tavoittaaksesi ne",
    "Jokainen päivä on uusi mahdollisuus aloittaa alusta ja kirjoittaa oma tarinasi.",
    "Pienet askeleet vievät pidemmälle kuin suuri liikkumattomuus.",
    "Ole ylpeä siitä, kuka olet tänään, sillä olet kulkenut pitkän matkan tullaksesi tähän pisteeseen.",
    "Kun tartut hetkeen, maailma avautuu uusille mahdollisuuksille.",
    "Et ole yksin – jokainen taistelu tekee sinusta vahvemman.",
    "Älä pelkää epäonnistumista; se on askel kohti menestystä.",
    "Keskity siihen, mitä voit hallita, ja anna muun virrata omalla painollaan.",
    "Sinun ei tarvitse olla täydellinen ollaksesi arvokas ja rakastettu.",
    "Ole valo, joka valaisee muidenkin tietä.",
    "Usko itseesi – sinussa on enemmän voimaa kuin ymmärrät.",
    "Kasvu alkaa epämukavuusalueelta. Astu rohkeasti uuteen.",
    "Yksi ystävällinen sana voi muuttaa jonkun päivän – tai elämän.",
    "Ole tänään se henkilö, jollaiseksi haluat tulla huomenna.",
    "Rohkeus ei ole pelon puutetta, vaan sen kohtaamista ja eteenpäin kulkemista.",
    "Kauneus on siinä, että uskallat olla oma itsesi.",
    "Kun suljet yhden oven, muista katsoa ympärillesi – ehkä toinen on jo auki.",
    "Älä vertaa itseäsi muihin; sinun matkasi on ainutlaatuinen.",
    "Anna anteeksi itsellesi virheistä, sillä ne opettavat sinulle arvokkaimpia oppitunteja.",
    "Sinä olet arvokas, tärkeä ja juuri oikeanlainen.",
    "Kaikki mitä tarvitset, on jo sisälläsi – odottamassa, että vapautat sen."
]; 

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

// Adding code for the 3 buttons of gameLevel
let multiplier;

    document.getElementById("easy").addEventListener("click", () => {
        multiplier = 3; 
        console.log("multiplier: "+multiplier);
    }); 
    document.getElementById("medium").addEventListener("click", () => {
        multiplier = 10; 
        console.log("multiplier: "+multiplier);
    });
    document.getElementById("hard").addEventListener("click", () => {
        multiplier = kuvat.length; 
        console.log("multiplier: "+multiplier);
    }); 

// END of Adding code for the 3 buttons of gameLevel

function escoger_numero(){
    let azar=Math.floor(Math.random() * 1);  //kuvat.lenght=3
    return azar;
}

function mostrar_imagen(num,im){

    document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src=kuvat[im]; 
}

function comparar(){

   const mensaje = document.getElementById("mensaje");

   if(numeros_actuales[0]==numeros_actuales[1] && numeros_actuales[1]==numeros_actuales[2]){
                
        mensaje.innerText = premios[numeros_actuales[0]];
        console.log("Mensaje ganador: "+numeros_actuales[0]);

        play();  // activa el audio
   }
}


function play(){

    let audio = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3");
    audio.play();      
}
