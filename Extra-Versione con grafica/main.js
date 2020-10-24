var difficolta=0;
var numeri_max=0;
var bombe_generate=[];
var numero_digitato=0;
var numeri_digitati=[];
var punteggio=0;
var gameover=false;
var cont = 1;

do{
    difficolta = parseInt(prompt('Inserisci il livello di difficoltà da 0 a 2:'));           /*accettiamo dall'utente un valore compreso tra 1 e 5*/
}while(difficolta>2 || difficolta<0)
console.log('Difficoltà: ' + difficolta);

if(difficolta==0){
    numeri_max=100;   //livello di difficolta' facile
}
else if(difficolta==1){
    numeri_max=81;    //livello di difficolta' medio
}
else if(difficolta==2){
    numeri_max=49;    //livello di difficolta' difficile
}


while(bombe_generate.length < 16){  /*Generiamo numeri random diversi tra loro*/
    var r = Math.floor((Math.random() * numeri_max)+1);
    if(bombe_generate.indexOf(r) === -1) bombe_generate.push(r);  /*Se il numero è diverso lo pusha nell'array*/
}
console.log(bombe_generate);

for (var i = 0; i < Math.sqrt(numeri_max); i++) {

    var tag = document.createElement("div"); //voglio creare un div
    tag.id = 'main_'+i;   //gli do l'id progressivo
    var element = document.getElementById("cont"); //mi deve creare il div nel container
    element.appendChild(tag); //creami il div nel container

    for (var j = 0; j < Math.sqrt(numeri_max); j++) {

    var tag = document.createElement("div");  //voglio creare un altro div
    var element = document.getElementById('main_'+i); //all'interno del seguente id
    element.appendChild(tag); //creamelo
    //var text = document.createTextNode(cont);
    //tag.appendChild(text);
    tag.id = cont;
    cont++;
    }
}

while (gameover==false) {//se gameover=false significa che non hai perso contina a ciclare altrimenti esce

    if(gameover==true){   //se gameover=true ti comunica che hai perso
        console.log('Hai perso');
    }
    else{  //altrimenti continui

        do{
            numero_digitato = parseInt(prompt('Digita valori numerici compresi tra 1 e ' + numeri_max));   //ti chiede di digitare un valore in un range
            //
                if(numeri_digitati.indexOf(numero_digitato) === -1){  //controlla che il valore da te digitato non sia stato gia inserito in precedenza se si lo aggiunge all'array
                    numeri_digitati.push(numero_digitato);
                }
                else{
                    console.log('hai gia digitato questo numero perfavore inseriscine un altro!');
                    numero_digitato = 0;
                    //altrimenti ti chiede di inserirne un'altro
                }

        }while(numero_digitato>numeri_max || numero_digitato<1)  //se il numero digitato e valido esce dal ciclo
        console.log(numero_digitato);

        for (var j = 0; j < bombe_generate.length; j++) {
            if(bombe_generate[j]==numero_digitato){  //confronta che il numero da te digitato non si trovi tra quelli generati random
                gameover=true;
                console.log('Hai perso!!!');  //se si hai perso
                document.getElementById(numero_digitato).innerHTML="<img src=\"img/bomb.png\">"
                document.getElementById("risultato").innerHTML="<p>HAI PERSO!!!</p>";
                break;
            }
            else{
                document.getElementById(numero_digitato).innerHTML="<p>"+numero_digitato+"</p>";
                document.getElementById("risultato").innerHTML="<p>OTTIMO</p>";
            }

        }
        if(gameover==false){   //se non hai perso ti incrementa il punteggio di +1
            punteggio++;
            console.log('Punteggio: ' + punteggio);
        }
        if(punteggio==(numeri_max-16)){  //se il tuo punteggio totale è uguale al numero massimo meno 16 generati random, significa che hai vinto
            console.log('Congratulazioni hai vinto il tuo punteggio è: ' + punteggio);
            gameover=true;
        }
    }

}
