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