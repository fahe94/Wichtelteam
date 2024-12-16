// Mapping von Passwörtern zu Abschnitten
const passwordMap = {
  "847362": "content1",
  "8793": "content2",
  "000000": "content3",
  "973214": "content4"
};

// Passwort überprüfen
function checkPassword() {
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (passwordMap[password]) {
    // Zeige den passenden Abschnitt
    document.getElementById("password-screen").style.display = "none";
    document.getElementById(passwordMap[password]).classList.add("visible");
  } else {
    // Zeige eine Fehlermeldung
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 2000);
  }
}

// Zurück zum Passwort-Formular
function goBack() {
  // Verstecke alle Abschnitte
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("visible");
  });
  // Zeige das Passwortformular wieder
  document.getElementById("password-screen").style.display = "block";
}
