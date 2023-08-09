function calculateNumber(value, isVowel) {
  const vowelValues = {
    A: 1,
    E: 5,
    I: 9,
    O: 6,
    U: 3,
  };

  const consonantValues = {
    B: 2,
    C: 3,
    D: 4,
    F: 6,
    G: 7,
    H: 8,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    V: 4,
    W: 5,
    X: 6,
    Y: isVowel ? 7 : 7,
    Z: 8,
  };

  const values = isVowel ? vowelValues : consonantValues;

  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    const char = value[i].toUpperCase();
    if (values.hasOwnProperty(char)) {
      sum += values[char];
    }
  }

  return sum;
}

function calculateSingleDigit(value) {
  while (value > 9) {
    value = value
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b));
  }

  return value;
}
function calculateNumerology() {
  const name = document.getElementById("name").value.trim();
  const birthDate = document.getElementById("birthDate").value;
  const birthMonth = document.getElementById("birthMonth").value;
  const birthYear = document.getElementById("birthYear").value;

  const soulUrgeNumber = calculateSingleDigit(calculateNumber(name, true));
  const personalityNumber = calculateSingleDigit(calculateNumber(name, false));
  const birthDateNumber = calculateSingleDigit(birthDate);
  const lifePathNumber = calculateSingleDigit(birthDate + birthMonth + birthYear);
  const attitudeNumber = calculateSingleDigit(birthDate + birthMonth);

  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `
    <p><span>Soul's Urge Number:</span> <span>${soulUrgeNumber}</span></p>
    <p><span>Personality Number:</span> <span>${personalityNumber}</span></p>
    <p><span>Name:</span> <span>${calculateSingleDigit(soulUrgeNumber + personalityNumber)}</span></p>
    <p><span>Birth Date:</span> <span>${birthDateNumber}</span></p>
    <p><span>Life Path Number:</span> <span>${lifePathNumber}</span></p>
    <p><span>Attitude Number:</span> <span>${attitudeNumber}</span></p>
    <button id="calculateAgainButton">Calculate Again</button>
  `;

  document.getElementById("calculator").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("soulurge").innerHTML = soulUrgeNumber
  document.getElementById("personality").innerHTML = personalityNumber
  document.getElementById('namenumber').innerHTML = calculateSingleDigit(soulUrgeNumber + personalityNumber);
  document.getElementById('destiny').innerHTML = calculateSingleDigit(soulUrgeNumber + personalityNumber);
  document.getElementById('birthdate').innerHTML = birthDateNumber;
  
  document.getElementById("calculateAgainButton").addEventListener("click", calculateAgain);
}

function calculateAgain() {
  document.getElementById("name").value = "";
  document.getElementById("birthDate").value = "";
  document.getElementById("birthMonth").value = "";
  document.getElementById("birthYear").value = "";

  document.getElementById("calculator").style.display = "block";
  document.getElementById("result").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // Load the header content
  const headerContainer = document.getElementById("headerContainer");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerContainer.innerHTML = xhr.responseText;

      // Attach event listener to "Calculate" button
      document.getElementById("calculateButton").addEventListener("click", calculateNumerology);
    }
  };
  xhr.send();
});
const soulUrgeNumber = sessionStorage.getItem("soulUrgeNumber");
const personalityNumber = sessionStorage.getItem("personalityNumber");
const birthDateNumber = sessionStorage.getItem("birthDateNumber");
const lifePathNumber = sessionStorage.getItem("lifePathNumber");
const attitudeNumber = sessionStorage.getItem("attitudeNumber");

if (soulUrgeNumber && personalityNumber && birthDateNumber && lifePathNumber && attitudeNumber) {
  displayResults(soulUrgeNumber, personalityNumber, birthDateNumber, lifePathNumber, attitudeNumber);
}

function openPage(pageName, elmnt) {
  const tabContents = document.getElementsByClassName("tabcontent");
  for (const tabContent of tabContents) {
    if (tabContent.id === pageName) {
      tabContent.style.display = "block";
    } else {
      tabContent.style.display = "none";
    }
  }

  // Add 'active' class to the clicked tab button and remove it from others
  const tablinks = document.getElementsByClassName("tablink");
  for (const tablink of tablinks) {
    if (tablink === elmnt) {
      tablink.classList.add("active");
    } else {
      tablink.classList.remove("active");
    }
  }
}

// Add event listeners to the tab buttons and "Decode Your Chart" button
document.getElementById("aboutTab").addEventListener("click", () => openPage("about", document.getElementById("aboutTab")));
document.getElementById("yourChartTab").addEventListener("click", () => openPage("your-chart", document.getElementById("yourChartTab")));
document.getElementById("manifestationTab").addEventListener("click", () => openPage("manifestation", document.getElementById("manifestationTab")));
openPage("about", document.getElementById("aboutTab"));


document.getElementById("calculateButton").addEventListener("click", calculateNumerology);
document.getElementById("calculateAgainButton").addEventListener("click", calculateAgain);
