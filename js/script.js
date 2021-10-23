const startGame = document.getElementById("start_game");
const difficultyOption = document.getElementById("difficulty_option");
const mainContainer = document.getElementById("main_container");
const contatorePunteggio = document.querySelector(".punteggio");

//al click del bottone "invia" devo leggere il valore del livello di difficoltà del select
startGame.addEventListener("click", function () {
    //leggo il valore che si trova nell'opzione scelta dall'utente e lo assegno a una variabile
    const difficultyLevel = difficultyOption.value;

    console.log("l'utente ha scelto il livello di difficoltà", difficultyLevel);

    //qui viene scelto il numero di caselle da creare
    const totalBoxes = getNBoxes(difficultyLevel);
    console.log("il numero totale di scatole è", totalBoxes);

    //genero le scatole
    boxesGenerator(totalBoxes);

    //le mine vengono posizionate nella griglia di gioco
    //svuoto l'array mombe ogni volta che si clicca sul bottone startGame
    //così che al cambio di difficoltà del gioco le bombe si troveranno in posizione diversa
    arrayBombs = [];
    bombsGenerator(totalBoxes);

    //mostro il punteggio come 0 all'inizio del gioco
    contatorePunteggio.innerHTML += `punteggio 0`

    //mostro la scritta della vittoria
    youWin()
});


let nBoxes;
//con questa funzione tengo conto del numero di quadrati da creare
function getNBoxes(value) {
    //creo una variabile che tenga conto del numero di quadrati da creare in base al livello di difficoltà

    //assegno alla variabile nBoxes il numero di scatole che voglio creare
    if (value === "1") {
        //assegno alla variabile "nBoxes" il valore 49
        nBoxes = 49;
    } else if (value === "2") {
        //assegno alla variabile "nBoxes" il valore 81
        nBoxes = 81;
    } else if (value === "3") {
        //assegno alla variabile "nBoxes" il valore 100
        nBoxes = 100;
    }


    return nBoxes;

}

//devo generare le boxes
/**
 * 
 * @param {number} value -> è il numero totale di celle 
 * 
 */
function boxesGenerator(value) {
    
    mainContainer.innerHTML = "";
    //azzero il punteggio a ogni inizio del gioco
    let punteggio = 0;
    //svuoto il contatore del punteggio e lo rimepo alla fine della funzione
    contatorePunteggio.innerHTML = "";


    const percentWidth = Math.sqrt(value);
    const boxDimension = 100 / percentWidth;

    for (let i = 1; i <= value; i++) {
        const boxN = document.createElement("div");
        boxN.classList.add("box");
        boxN.innerHTML += `<p class="user_select_none">${i}</p>`
        boxN.style.width = boxDimension + "%";
        boxN.style.height = boxDimension + "%";


        //quando clicco su una scatola la scatola cambia aspetto
        boxN.addEventListener("click", function () {
            //azzero il punteggio per sostituirlo con quello nuovo alla fine del ciclo
            contatorePunteggio.innerHTML = ``
            //se la scatola su cui ho cliccato è una bomba, ha un aspetto diverso (e faccio finire il gioco)
            if (arrayBombs.includes(i)) {
                //mostro le bombe
                showBombs();
                //mostro il messaggio di game over
                mainContainer.innerHTML += `
                                            <div class="game_over">
                                                <h1>
                                                    HAI PERSO
                                                </h1>
                                            </div>
                    `

            } else if (boxN.classList.contains("clicked")) {
                console.log("il punteggio", punteggio)
            } else {
                this.classList.add("clicked")
                punteggio++
                console.log("il punteggio", punteggio)
                youWin()
            }
            //inserisco il punteggio nell'html 
            contatorePunteggio.innerHTML += `punteggio ${punteggio}`

        })

        mainContainer.append(boxN);

    }
}

/* devo crere una funzione che :
-mi recupera tutte le boxes (querySelectorAll)
-ciclare (con un for) sull'array delle bombe (così ciclo solo 16 volte)
-comparare l'indice delle bombe con l'indice dell'array di tutte le boxes
    -se sono ugali allora mostro tutte le bombe 
-mostro la scritta "hai perso"                   
*/
function showBombs() {
    //creo un array contenente tutte le boxes della griglia di gioco
    const arrayBoxes = mainContainer.querySelectorAll(".box")
    console.log("l'array delle boxes", arrayBoxes);

    //scorro 'array delle bombe
    for (let i = 0; i < arrayBombs.length; i++) {
        const bombN = arrayBombs[i];

        const cellaBomba = arrayBoxes[bombN - 1];
        cellaBomba.classList.add("bomb");
    }
}

//se il numero di boxN con classe clicked è === a il numero di boxN totali - il numero di bombe 
//mostro il messaggio che hai vinto
function youWin() {
    let clickedBox = document.querySelectorAll(".clicked");
    
    if (clickedBox.length === nBoxes - arrayBombs.length) {
        mainContainer.innerHTML += `
                                    <div class="you_win">
                                        <h1>
                                            HAI VINTO
                                        </h1>
                                    </div>
        `
    }
}