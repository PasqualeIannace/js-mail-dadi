// VERIFICA EMAIL
const mail = ["pasquale.iannace@gmail.com", "pasquale.iannace@hotmail.it", "pippo@boolean.com", "pluto@boolean.com"];

console.log(mail);

const btn = document.getElementById("checkBtn");
// Inizio ricerca al click del tasto
btn.addEventListener("click", function() {

    // prendo l'input email
    const checkMail = document.getElementById("email").value;

    // verifico 
    for(let i = 0; i < mail.length; i++) {

        if (checkMail == mail[i]) {
            alert("Email TROVATA!");
            break;
        } else if (checkMail != mail[i] && i == mail.length - 1) {
            alert("Email NON trovata!");
        }
    }
});

// GIOCHIAMO CON I DADI

const btnPlay = document.getElementById("playBtn");

let playerCounter = 0;
let pcCounter = 0;


btnPlay.addEventListener("click", function() {

    const dadoUmano = Math.floor(Math.random() * 6) + 1;
    const dadoComputer = Math.floor(Math.random() * 6) + 1;
    console.log("Player: ", dadoUmano);
    console.log("PC: " ,dadoComputer);


    if (dadoUmano > dadoComputer) {
        playerCounter++;
    } else if (dadoUmano < dadoComputer) {
        pcCounter++;
    } else {
        console.log("Pareggio!")
    }

    console.log("Vittorie Player: ", playerCounter);
    console.log("Vittorie PC: ", pcCounter);

})