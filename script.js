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
  
    document.getElementById("resultName").textContent =calculateSingleDigit(soulUrgeNumber + personalityNumber) ;
    document.getElementById("resultBirthDate").textContent = birthDateNumber;
    document.getElementById("resultSoulUrge").textContent = soulUrgeNumber;
    document.getElementById("resultPersonality").textContent = personalityNumber;
    document.getElementById("resultLifePath").textContent = lifePathNumber;
    document.getElementById("resultAttitude").textContent = attitudeNumber;
  
    document.getElementById("calculator").style.display = "none";
    document.getElementById("result").style.display = "block";
  }
  
  function calculateAgain() {
    document.getElementById("name").value = "";
    document.getElementById("birthDate").value = "";
    document.getElementById("birthMonth").value = "";
    document.getElementById("birthYear").value = "";
  
    document.getElementById("calculator").style.display = "block";
    document.getElementById("result").style.display = "none";
  }
  
  document.getElementById("calculateButton").addEventListener("click", calculateNumerology);
  document.getElementById("calculateAgainButton").addEventListener("click", calculateAgain);
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

  document.getElementById("decodeChartButton").addEventListener("click", function () {
    const chartSection = document.getElementById("your-chart");
    chartSection.scrollIntoView({ behavior: "smooth" });
  });