// Modal verbs forms for different tenses
const modalVerbs = {
  dürfen: {
    present: ["darf", "darfst", "darf", "dürfen", "dürft", "dürfen"],
    past: ["durfte", "durftest", "durfte", "durften", "durftet", "durften"],
    future: ["werde dürfen", "wirst dürfen", "wird dürfen", "werden dürfen", "werdet dürfen", "werden dürfen"],
  },
  können: {
    present: ["kann", "kannst", "kann", "können", "könnt", "können"],
    past: ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"],
    future: ["werde können", "wirst können", "wird können", "werden können", "werdet können", "werden können"],
  },
  mögen: {
    present: ["mag", "magst", "mag", "mögen", "mögt", "mögen"],
    past: ["mochte", "mochtest", "mochte", "mochten", "mochtet", "mochten"],
    future: ["werde mögen", "wirst mögen", "wird mögen", "werden mögen", "werdet mögen", "werden mögen"],
  },
  müssen: {
    present: ["muss", "musst", "muss", "müssen", "müsst", "müssen"],
    past: ["musste", "musstest", "musste", "mussten", "musstet", "mussten"],
    future: ["werde müssen", "wirst müssen", "wird müssen", "werden müssen", "werdet müssen", "werden müssen"],
  },
  sollen: {
    present: ["soll", "sollst", "soll", "sollen", "sollt", "sollen"],
    past: ["sollte", "solltest", "sollte", "sollten", "solltet", "sollten"],
    future: ["werde sollen", "wirst sollen", "wird sollen", "werden sollen", "werdet sollen", "werden sollen"],
  },
  wollen: {
    present: ["will", "willst", "will", "wollen", "wollt", "wollen"],
    past: ["wollte", "wolltest", "wollte", "wollten", "wolltet", "wollten"],
    future: ["werde wollen", "wirst wollen", "wird wollen", "werden wollen", "werdet wollen", "werden wollen"],
  },
};

// Reference to result cells in the table
const resultCells = document.querySelectorAll(".result-block tbody td:nth-child(2)");

// Default time selection
let selectedTime = "present";

// Time selection buttons
const timeButtons = document.querySelectorAll(".time-button");
timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    timeButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");
    // Update selected time
    selectedTime = button.getAttribute("data-time");
    // Re-convert the verb if one is already entered
    const verbInput = document.getElementById("verb-input").value.trim().toLowerCase();
    if (verbInput) {
      convertModalVerbs();
    }
  });
});

// Converter function
function convertModalVerbs(event) {
  if (event) event.preventDefault();

  const verbInput = document.getElementById("verb-input").value.trim().toLowerCase();
  const verbKey = Object.keys(modalVerbs).find((key) => key.toLowerCase() === verbInput);

  if (!verbKey) {
    alert("Wpisz jeden z tych czasowników modalnych: dürfen, können, mögen, müssen, sollen, wollen.");
    return;
  }

  const forms = modalVerbs[verbKey][selectedTime];
  resultCells.forEach((cell, index) => {
    cell.textContent = forms[index];
  });
}

// Clear input and table
document.getElementById("clear-button").addEventListener("click", () => {
  document.getElementById("verb-input").value = "";
  resultCells.forEach((cell) => {
    cell.textContent = "";
  });
});

// Add event listener for form submission
document.getElementById("converter-form").addEventListener("submit", convertModalVerbs);

// Hide intro section and scroll to converter
document.getElementById("hideIntro").addEventListener("click", () => {
  const introSection = document.getElementById("intro");
  introSection.classList.add("hidden");

  const converterSection = document.getElementById("converter");
  converterSection.classList.remove("hidden");
  converterSection.scrollIntoView({ behavior: "smooth" });
});