// Chiediamo all'utente i dati

// const formSelect = document.querySelector(".form-select");


let form = document.querySelector(".form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

        let nome = document.querySelector("input[name='nome']").value;
        let km = parseFloat(document.querySelector("input[name='km']").value);
        let eta = parseInt(document.querySelector("select[name='eta']").value);
        let nomeBiglietto = document.querySelector("p[name='nomeBiglietto']");
        let prezzoVisibile = document.querySelector("td[name='prezzoVisibile']");
        let offerta = document.querySelector("td[name='offerta']");
        let carrozza = document.querySelector("td[name='carrozza']");
        let codiceCp = document.querySelector("td[name='codiceCp']");
        let contenitoreBiglietto = document.querySelector(".displayNone");
        
        

        // imposto il prezzo al km
        let prezzo = km * 0.21;

        if (eta === 1) {
            prezzo = prezzo * 0.8; // 20% di sconto
        } else if (eta === 3) {
            prezzo = prezzo * 0.6; // 40% di sconto
        }

        prezzo = parseFloat(prezzo.toFixed(2));

        nomeBiglietto.innerText = nome;
        prezzoVisibile.innerText = prezzo + " $";
        offerta.innerText = "Biglietto standard";
        carrozza.innerText = numeroRandom(1, 10);
        codiceCp.innerText = numeroRandom(90000, 99999);
        contenitoreBiglietto.style.display = "block";

        // PULIZIA CAMPI
        form.reset();


        
        
       
    
});



// Formattazione del prezzo a due decimali

// funzione carrozza casuale
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

