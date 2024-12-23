// Converter app variables.
const durfen = ["durfte", "durftest", "durften", "durftet"];
const konnen = ["konnte", "konntest", "konnten", "konntet"];
const mogen = ["mochte", "mochtest", "mochten", "mochtet"];
const mussen = ["musste", "musstest", "mussten", "musstet"];
const sollen = ["sollte", "solltest", "sollten", "solltet"];
const wollen = ["wollte", "wolltest", "wollten", "wolltet"];

const modalVerbForms = document.getElementsByClassName("modal");

// Converter script
function convertModalVerbs() {
  let wordToConvert = document.getElementById("toConvert").value.toLowerCase();

  switch (wordToConvert) {
    case "durfen":
      modalVerbForms[0].innerHTML = durfen[0];
      modalVerbForms[1].innerHTML = durfen[1];
      modalVerbForms[2].innerHTML = durfen[0];
      modalVerbForms[3].innerHTML = durfen[2];
      modalVerbForms[4].innerHTML = durfen[3];
      modalVerbForms[5].innerHTML = durfen[2];
      break;

    case "konnen":
      modalVerbForms[0].innerHTML = konnen[0];
      modalVerbForms[1].innerHTML = konnen[1];
      modalVerbForms[2].innerHTML = konnen[0];
      modalVerbForms[3].innerHTML = konnen[2];
      modalVerbForms[4].innerHTML = konnen[3];
      modalVerbForms[5].innerHTML = konnen[2];
      break;

    case "mogen":
      modalVerbForms[0].innerHTML = mogen[0];
      modalVerbForms[1].innerHTML = mogen[1];
      modalVerbForms[2].innerHTML = mogen[0];
      modalVerbForms[3].innerHTML = mogen[2];
      modalVerbForms[4].innerHTML = mogen[3];
      modalVerbForms[5].innerHTML = mogen[2];
      break;

    case "mussen":
      modalVerbForms[0].innerHTML = mussen[0];
      modalVerbForms[1].innerHTML = mussen[1];
      modalVerbForms[2].innerHTML = mussen[0];
      modalVerbForms[3].innerHTML = mussen[2];
      modalVerbForms[4].innerHTML = mussen[3];
      modalVerbForms[5].innerHTML = mussen[2];
      break;

    case "sollen":
      modalVerbForms[0].innerHTML = sollen[0];
      modalVerbForms[1].innerHTML = sollen[1];
      modalVerbForms[2].innerHTML = sollen[0];
      modalVerbForms[3].innerHTML = sollen[2];
      modalVerbForms[4].innerHTML = sollen[3];
      modalVerbForms[5].innerHTML = sollen[2];
      break;

    case "wollen":
      modalVerbForms[0].innerHTML = wollen[0];
      modalVerbForms[1].innerHTML = wollen[1];
      modalVerbForms[2].innerHTML = wollen[0];
      modalVerbForms[3].innerHTML = wollen[2];
      modalVerbForms[4].innerHTML = wollen[3];
      modalVerbForms[5].innerHTML = wollen[2];
      break;

    default:
      alert("Wpisz jeden z tych czasowników modalnych: durfen, konnen, mogen, mussen, sollen, wollen.");
  }
}
