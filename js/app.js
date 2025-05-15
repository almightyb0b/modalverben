// Modal Verbs Data
const modalVerbs = {
  dürfen: {
    present: ["darf", "darfst", "darf", "dürfen", "dürft", "dürfen"],
    past: ["durfte", "durftest", "durfte", "durften", "durftet", "durften"],
    future: ["werde dürfen", "wirst dürfen", "wird dürfen", "werden dürfen", "werdet dürfen", "werden dürfen"]
  },
  können: {
    present: ["kann", "kannst", "kann", "können", "könnt", "können"],
    past: ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"],
    future: ["werde können", "wirst können", "wird können", "werden können", "werdet können", "werden können"]
  },
  müssen: {
    present: ["muss", "musst", "muss", "müssen", "müsst", "müssen"],
    past: ["musste", "musstest", "musste", "mussten", "musstet", "mussten"],
    future: ["werde müssen", "wirst müssen", "wird müssen", "werden müssen", "werdet müssen", "werden müssen"]
  },
  sollen: {
    present: ["soll", "sollst", "soll", "sollen", "sollt", "sollen"],
    past: ["sollte", "solltest", "sollte", "sollten", "solltet", "sollten"],
    future: ["werde sollen", "wirst sollen", "wird sollen", "werden sollen", "werdet sollen", "werden sollen"]
  },
  wollen: {
    present: ["will", "willst", "will", "wollen", "wollt", "wollen"],
    past: ["wollte", "wolltest", "wollte", "wollten", "wolltet", "wollten"],
    future: ["werde wollen", "wirst wollen", "wird wollen", "werden wollen", "werdet wollen", "werden wollen"]
  },
  mögen: {
    present: ["mag", "magst", "mag", "mögen", "mögt", "mögen"],
    past: ["mochte", "mochtest", "mochte", "mochten", "mochtet", "mochten"],
    future: ["werde mögen", "wirst mögen", "wird mögen", "werden mögen", "werdet mögen", "werden mögen"]
  }
};

// DOM Elements
const hideIntroButton = document.getElementById("hideIntro");
const introSection = document.getElementById("intro");
const converterSection = document.getElementById("converter");
const converterForm = document.getElementById("converter-form");
const verbInput = document.getElementById("verb-input");
const clearButton = document.getElementById("clear-button");
const timeButtons = document.querySelectorAll(".time-button");
const resultCells = document.querySelectorAll(".result-block tbody td:nth-child(2)");
const backToIntroButton = document.getElementById("backToIntro");

// Initial state
let selectedTime = "present";

// Event Listeners
hideIntroButton.addEventListener("click", toggleSections);
converterForm.addEventListener("submit", convertModalVerbs);
clearButton.addEventListener("click", clearForm);
timeButtons.forEach(button => {
  button.addEventListener("click", changeTime);
});
backToIntroButton.addEventListener("click", toggleSections);

// Add input event listener for real-time conversion
verbInput.addEventListener("input", debounce(function() {
  if (verbInput.value.trim()) {
    convertModalVerbs();
  }
}, 500));

// Functions
function toggleSections() {
  introSection.classList.toggle("hidden");
  converterSection.classList.toggle("hidden");
  
  // Scroll to top when switching sections
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Clear form when going back to intro
  if (!converterSection.classList.contains("hidden")) {
    clearForm();
    verbInput.focus();
  }
}

function convertModalVerbs(event) {
  if (event) event.preventDefault();

  const verbInputValue = verbInput.value.trim().toLowerCase();
  const verbKey = Object.keys(modalVerbs).find((key) => key.toLowerCase() === verbInputValue);

  if (!verbKey) {
    // Only show alert if submit button was clicked
    if (event && event.type === "submit") {
      showNotification("Wpisz jeden z tych czasowników modalnych: dürfen, können, mögen, müssen, sollen, wollen.", "error");
    }
    clearResults();
    return;
  }

  const forms = modalVerbs[verbKey][selectedTime];
  
  // Animate the results
  resultCells.forEach((cell, index) => {
    setTimeout(() => {
      cell.textContent = forms[index];
      cell.classList.add("highlight");
      setTimeout(() => cell.classList.remove("highlight"), 500);
    }, index * 100);
  });
  
  showNotification(`Odmieniono czasownik: ${verbKey}`, "success");
}

function clearForm() {
  verbInput.value = "";
  clearResults();
  verbInput.focus();
}

function clearResults() {
  resultCells.forEach(cell => {
    cell.textContent = "";
  });
}

function changeTime(event) {
  // Remove active class from all buttons
  timeButtons.forEach(button => {
    button.classList.remove("active");
  });
  
  // Add active class to clicked button
  event.target.classList.add("active");
  
  // Update selected time
  selectedTime = event.target.dataset.time;
  
  // If there's a verb in the input, convert it with the new time
  if (verbInput.value.trim()) {
    convertModalVerbs();
  }
}

// Helper function for debouncing
function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// Notification system
function showNotification(message, type = "info") {
  // Remove any existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Add close button
  const closeButton = document.createElement("span");
  closeButton.className = "notification-close";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => notification.remove());
  notification.appendChild(closeButton);
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// Add these styles to your CSS file
const styleElement = document.createElement("style");
styleElement.textContent = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: opacity 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
  }
  
  .notification.success {
    background-color: #4CAF50;
  }
  
  .notification.error {
    background-color: #F44336;
  }
  
  .notification.info {
    background-color: #2196F3;
  }
  
  .notification-close {
    margin-left: 15px;
    cursor: pointer;
    font-size: 20px;
  }
  
  .fade-out {
    opacity: 0;
  }
  
  .highlight {
    animation: highlight-animation 0.5s ease;
  }
  
  @keyframes highlight-animation {
    0% { background-color: #fffae6; }
    50% { background-color: #fff2c5; }
    100% { background-color: transparent; }
  }
`;
document.head.appendChild(styleElement);