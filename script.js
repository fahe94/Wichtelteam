// script.js
document.getElementById("submit-button").addEventListener("click", function () {
  const correctPassword = "1843"; // Ersetze durch dein Passwort
  const enteredPassword = document.getElementById("password-input").value;

  if (enteredPassword === correctPassword) {
    document.getElementById("password-screen").style.display = "none"; // Login ausblenden
    document.getElementById("content").style.display = "block"; // Inhalt anzeigen
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block"; // Fehlermeldung anzeigen
    setTimeout(() => {
      errorMessage.style.display = "none"; // Fehlermeldung nach 2 Sekunden ausblenden
    }, 2000);
  }
});
