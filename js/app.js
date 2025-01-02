// Modal verbs forms
const durfen = ["durfte", "durftest", "durfte", "durften", "durftet", "durften"];
const konnen = ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"];
const mogen = ["mochte", "mochtest", "mochte", "mochten", "mochtet", "mochten"];
const mussen = ["musste", "musstest", "musste", "mussten", "musstet", "mussten"];
const sollen = ["sollte", "solltest", "sollte", "sollten", "solltet", "sollten"];
const wollen = ["wollte", "wolltest", "wollte", "wollten", "wolltet", "wollten"];

// Reference to result cells in the table
const resultCells = document.querySelectorAll(".result-block tbody td:nth-child(2)");

// Converter function
function convertModalVerbs(event) {
  // Prevent form submission and page reload
  event.preventDefault();

  const wordToConvert = document.getElementById("verb-input").value.toLowerCase();

  let forms;

  switch (wordToConvert) {
    case "durfen":
      forms = durfen;
      break;
    case "konnen":
      forms = konnen;
      break;
    case "mogen":
      forms = mogen;
      break;
    case "mussen":
      forms = mussen;
      break;
    case "sollen":
      forms = sollen;
      break;
    case "wollen":
      forms = wollen;
      break;
    default:
      alert("Wpisz jeden z tych czasowników modalnych: dürfen, können, mögen, müssen, sollen, wollen.");
      return;
  }

  // Populate the table with forms
  resultCells.forEach((cell, index) => {
    cell.innerHTML = forms[index];
  });
}

// Clear input and table
document.getElementById("clear-button").addEventListener("click", () => {
  document.getElementById("verb-input").value = "";
  resultCells.forEach((cell) => {
    cell.innerHTML = "";
  });
});

// Add event listener for form submission
document.getElementById("converter-form").addEventListener("submit", convertModalVerbs);

// Smooth scroll to converter section
document.querySelector("section#intro button").addEventListener("click", () => {
  const converterSection = document.querySelector("section#converter");
  converterSection.scrollIntoView({ behavior: "smooth" });
});
