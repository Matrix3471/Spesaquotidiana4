
/* Dizionario di prova: Codice SQ → Punti */
const saldo = {
  "SQ20240612MB": 5,
  "SQ20240613LV": 8,
  "SQ20240614AR": 3
};

function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const result = document.getElementById("result");

  if (!code) {
    result.textContent = "Inserisci un codice SQ.";
  } else if (saldo[code] != null) {
    result.textContent = `Hai ${saldo[code]} punti SQ.`;
  } else {
    result.textContent = "Codice non trovato.";
  }
}

/* Permette di premere INVIO invece di cliccare il bottone */
document
  .getElementById("codeInput")
  .addEventListener("keyup", function (e) {
    if (e.key === "Enter") checkCode();
  });
