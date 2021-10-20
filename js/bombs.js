/*
-devo generare 16 numeri casuali tra 1 e (numero massimo di caselle) -> che si basa sul livello di difficoltà del gioco
-la lista di numeri (un array) non può contenere dei doppioni

-quando l'utente clicca su una cella
    -controlliamo se la cella su cui ha cliccato è presente nella lista delle bombe (generate prima in maniera randomica)
        -se è presente la cella si colora di rosso e il gioco finisce
        -altrimenti la cella si comporta come al solito e l'utente continua a giocare
-la partita termina quando 1. si calpesta una mina, 2.l'utente ha cliccato su tutte le celle che non sono mine 
    -usando un contatore conto se l'utente ha cliccato n volte(numero massimo di caselle) meno 16 (numero di bombe)
-alla fine devo scoprire tutte le mine e dare un punteggio al giocatore (basato sul contatore di prima)
*/