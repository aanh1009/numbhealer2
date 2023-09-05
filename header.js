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
let userCharts = [];
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
  document.getElementById('lifepath').innerHTML = lifePathNumber;
  document.getElementById("calculateAgainButton").addEventListener("click", calculateAgain);
  var SUcontent = "";

  if (soulUrgeNumber == "1") {
    SUcontent = "As a Soul Urge 1, you possess an unwavering desire for independence and self-reliance. Your heart seeks individual achievement, and you value personal recognition and autonomy. Your fulfillment lies in being a trailblazer, standing out from the crowd, and achieving greatness on your terms.";
  }
  if (soulUrgeNumber == "2") {
    SUcontent = "Being a Soul Urge 2, your happiness thrives in nurturing relationships and fostering harmony.  Your fulfillment lies in the beauty of cooperation, where you create deep connections and a sense of togetherness. You are the peacemaker and empath, finding joy in making the world a better place one relationship at a time.";
  }
  if (soulUrgeNumber == "3") {
    SUcontent = "As a Soul Urge 3, your soul is a canvas of creativity and self-expression. You find happiness in exploring your artistic and communicative talents, spreading joy and inspiration wherever you go. You possess a gift for making life more colorful and exciting through your imaginative pursuits.";
  }
  if (soulUrgeNumber == "4") {
    SUcontent = "With a Soul Urge 4, practicality and stability are your cornerstones of happiness. You seek security in structured environments and dependable routines, valuing the foundations that lead to lasting success. Your fulfillment lies in your unwavering commitment to building a solid and reliable life for yourself and those you care about. You are the dependable pillar that others can always count on.";
  }
  if (soulUrgeNumber == "5") {
    SUcontent = "As a Soul Urge 5, you thirst for adventure and change. Your happiness blossoms as you explore new experiences and embrace life's diverse opportunities. You are the explorer of the unknown, always ready for the next thrilling journey.";
  }
  if (soulUrgeNumber == "6") {
    SUcontent = "You are the nurturing soul with a Soul Urge 6, driven by a strong sense of responsibility. Your heart finds happiness in caring for others and creating harmony in your family and relationships. Your fulfillment comes from being the caregiver, the protector, and the source of love and support.";
  }
  if (soulUrgeNumber == "7") {
    SUcontent = "With a Soul Urge 7, you are the seeker of knowledge and understanding. Your happiness springs from intellectual pursuits, delving deep into the mysteries of life and seeking wisdom. Your fulfillment lies in the journey of self-discovery and the pursuit of truth.";
  }
  if (soulUrgeNumber == "8") {
    SUcontent = "As a Soul Urge 8, you possess a strong desire for success and power. You find happiness in achieving material and financial goals, striving for leadership and influence in life. Your fulfillment comes from making a significant impact on the world and leaving a legacy of prosperity.";
  }
  if (soulUrgeNumber == "9") {
    SUcontent = "You are the compassionate humanitarian with a Soul Urge 9. Your happiness thrives in helping others and making a positive impact on the world. Your fulfillment comes from nurturing a global sense of love, unity, and goodwill.";
  }
  var pcontent = "";

  if (personalityNumber == "1") {
    pcontent = "As a Personality Number 1, you possess unwavering self-confidence and leadership qualities. You are a natural-born leader, eager to take charge and pave your path to success.";
  }
  if (personalityNumber == "2") {
    pcontent = "Being a Personality Number 2, you are a harmonious and cooperative individual. You thrive in partnerships, seeking to create balance and unity in all aspects of your life.";
  }
  if (personalityNumber == "3") {
    pcontent = "As a Personality Number 3, you are a creative and expressive soul. You find joy in artistic and communicative endeavors, sharing your talents and inspiring others.";
  }
  if (personalityNumber == "4") {
    pcontent = "With a Personality Number 4, you value practicality and stability. You are committed to building a secure and dependable life for yourself and your loved ones.";
  }
  if (personalityNumber == "5") {
    pcontent = "As a Personality Number 5, you are an adventurous spirit. You thrive on exploring new experiences and embracing change, always seeking freedom and excitement.";
  }
  if (personalityNumber == "6") {
    pcontent = "You possess a nurturing soul as a Personality Number 6. You find happiness in caring for others and creating harmony in your family and relationships.";
  }
  if (personalityNumber == "7") {
    pcontent = "With a Personality Number 7, you are a seeker of knowledge and wisdom. Intellectual pursuits and self-discovery are your sources of fulfillment.";
  }
  if (personalityNumber == "8") {
    pcontent = "As a Personality Number 8, you have a strong desire for success and influence. Achieving material and financial goals drives your sense of fulfillment.";
  }
  if (personalityNumber == "9") {
    pcontent = "You are a compassionate humanitarian with a Personality Number 9. Helping others and fostering love and unity in the world bring you joy.";
  }
  var manifesto ="";
  
  if (lifePathNumber == "1") {
    manifesto = "I am so great, I have done my best and I am satisfied with myself";
  }
  if (lifePathNumber == "2") {
    manifesto= "I find peace and affection in every soul";
  }
  if (lifePathNumber== "3") {
    manifesto = "I love my audience and my listeners. I believe in the circle of life and in the tapestry of mind, I feel love and peace";
  }
  if (lifePathNumber == "4") {
    manifesto = "I am not intimidated by the future. Today is my valuable gift, and I cherish it with all love";
  }
  if (lifePathNumber == "5") {
    manifesto = "I am more than willing to change the mindset that got me caught up in this situation";
  }
  if (lifePathNumber == "6") {
    manifesto = "I wish to get connected to really sincere partners and have serious relationships. I helped people with my heart and I know I am acknowledged for the wholeheartedness";
  }
  if (lifePathNumber == "7") {
    manifesto = "I am guided by the universe and I put faith in the flow of existence; life is a complicated combination of incidences and I am a steadfast explorer.";
  }
  if (lifePathNumber== "8") {
    manifesto = "I believe in financial sufficiency and my money would always be there, within my control";
  }
  if (lifePathNumber == "9") {
    manifesto = "I am more than willing to let bygones be bygones and feel all love in the air";
  }
  var namecontent ="";
  if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 1) {
    namecontent = "Name Number 1: Your name number is associated with leadership, innovation, and individuality. People with this name number are often seen as pioneers and achievers. You have the potential to make a significant impact on your field.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 2) {
    namecontent = "Name Number 2: Your name number is linked to cooperation, diplomacy, and partnership. You excel in situations that require harmony and teamwork. Building strong relationships and creating balance are your strengths.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 3) {
    namecontent = "Name Number 3: Your name number is associated with creativity, self-expression, and communication. You have a gift for art, expression, and connecting with others. Your positive energy and enthusiasm are contagious.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 4) {
    namecontent = "Name Number 4: Your name number signifies stability, organization, and practicality. You excel in structured environments and are known for your reliability and attention to detail. Building a solid foundation is your forte.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 5) {
    namecontent = "Name Number 5: Your name number is linked to adventure, freedom, and versatility. You thrive on change and new experiences, always seeking excitement and embracing opportunities for growth.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 6) {
    namecontent = "Name Number 6: Your name number represents responsibility, nurturing, and love. You are a caring and compassionate individual, often playing the role of the caregiver and creating harmony in your relationships.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 7) {
    namecontent = "Name Number 7: Your name number is associated with introspection, analysis, and wisdom. You have a deep thirst for knowledge and enjoy exploring the mysteries of life. Self-discovery is a significant part of your journey.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 8) {
    namecontent = "Name Number 8: Your name number signifies ambition, success, and power. You are driven to achieve material and financial goals, seeking leadership and influence in your endeavors. Leaving a legacy of prosperity is important to you.";
  } else if (calculateSingleDigit(soulUrgeNumber + personalityNumber) == 9) {
    namecontent = "Name Number 9: Your name number represents compassion, humanitarianism, and universal love. Helping others and making a positive impact on the world are your sources of fulfillment. You promote unity and goodwill.";
  }
  var destinyNumber = calculateSingleDigit(soulUrgeNumber + personalityNumber);
  if (destinyNumber == 1) {
    destinycontent = "Destiny Number 1: Your destiny number indicates a path of independence, leadership, and innovation. You are destined to take charge and make your mark on the world. Embrace your individuality and strive for greatness.";
  } else if (destinyNumber == 2) {
    destinycontent = "Destiny Number 2: Your destiny number points to a path of cooperation, diplomacy, and partnership. You are destined to play a vital role in creating harmony and balance in your surroundings. Building meaningful relationships is a key part of your journey.";
  } else if (destinyNumber == 3) {
    destinycontent = "Destiny Number 3: Your destiny number signifies a path of creativity, self-expression, and communication. You are destined to use your artistic and expressive talents to bring joy and inspiration to others. Share your unique gifts with the world.";
  } else if (destinyNumber == 4) {
    destinycontent = "Destiny Number 4: Your destiny number represents a path of stability, organization, and practicality. You are destined to build a solid and dependable life for yourself and those you care about. Your commitment to structure and reliability will lead to lasting success.";
  } else if (destinyNumber == 5) {
    destinycontent = "Destiny Number 5: Your destiny number indicates a path of adventure, freedom, and versatility. You are destined to embrace change and seek diverse experiences. Your journey will be filled with exciting opportunities and personal growth.";
  } else if (destinyNumber == 6) {
    destinycontent = "Destiny Number 6: Your destiny number points to a path of responsibility, nurturing, and love. You are destined to be a caregiver and protector, creating harmony in your family and relationships. Your loving and supportive nature will bring fulfillment.";
  } else if (destinyNumber == 7) {
    destinycontent = "Destiny Number 7: Your destiny number signifies a path of introspection, analysis, and wisdom. You are destined to seek knowledge and understanding, delving deep into the mysteries of life. Your pursuit of truth and self-discovery is central to your journey.";
  } else if (destinyNumber == 8) {
    destinycontent = "Destiny Number 8: Your destiny number represents a path of ambition, success, and power. You are destined to achieve material and financial goals, striving for leadership and influence. Your impact on the world and legacy of prosperity are part of your destiny.";
  } else if (destinyNumber == 9) {
    destinycontent = "Destiny Number 9: Your destiny number points to a path of compassion, humanitarianism, and universal love. You are destined to make a positive impact on the world by helping others and promoting love, unity, and goodwill. Embrace your role as a compassionate humanitarian.";
  }
  var birthDatecontent = '';
  if (birthDateNumber == 1) {
    birthDatecontent = "Birthdate Number 1: Individuals with this birthdate number are born leaders. You have a strong sense of independence, determination, and ambition. Your path in life is one of innovation and originality. Embrace your leadership qualities and make your mark on the world.";
  } else if (birthDateNumber == 2) {
    // Birthdate Number 2 content
    birthDatecontent = "Birthdate Number 2: Your birthdate number signifies a path of cooperation and partnership. You thrive in harmonious environments and excel in working with others. Building strong relationships and creating balance in your life are key aspects of your journey.";
  } else if (birthDateNumber == 3) {
    // Birthdate Number 3 content
    birthDatecontent = "Birthdate Number 3: Individuals with this birthdate number are blessed with creativity and self-expression. You have a natural talent for communication and enjoy sharing your ideas with the world. Your positive energy and enthusiasm are contagious.";
  } else if (birthDateNumber == 4) {
    // Birthdate Number 4 content
    birthDatecontent = "Birthdate Number 4: Your birthdate number represents stability and practicality. You are dependable and thrive in structured environments. Building a solid foundation for your life and career is central to your journey.";
  } else if (birthDateNumber == 5) {
    // Birthdate Number 5 content
    birthDatecontent = "Birthdate Number 5: Individuals with this birthdate number have a thirst for adventure and change. You embrace new experiences and thrive in diverse environments. Your path in life is filled with excitement and opportunities for personal growth.";
  } else if (birthDateNumber == 6) {
    // Birthdate Number 6 content
    birthDatecontent = "Birthdate Number 6: Your birthdate number signifies a path of responsibility and love. You are a caring and compassionate individual, often taking on the role of a caregiver and creating harmony in your relationships.";
  } else if (birthDateNumber == 7) {
    // Birthdate Number 7 content
    birthDatecontent = "Birthdate Number 7: Individuals with this birthdate number are seekers of knowledge and wisdom. You have a deep curiosity and enjoy exploring the mysteries of life. Your pursuit of truth and self-discovery is a significant part of your journey.";
  } else if (birthDateNumber == 8) {
    // Birthdate Number 8 content
    birthDatecontent = "Birthdate Number 8: Your birthdate number represents ambition and success. You are driven to achieve material and financial goals, and you seek leadership and influence in your endeavors. Leaving a legacy of prosperity is important to you.";
  } else if (birthDateNumber == 9) {
    // Birthdate Number 9 content
    birthDatecontent = "Birthdate Number 9: Your birthdate number points to a path of compassion and humanitarianism. You are destined to make a positive impact on the world by helping others and promoting love, unity, and goodwill.";
  }
  document.getElementById("pcontent").innerHTML = pcontent;
  document.getElementById("sucontent").innerHTML = SUcontent;
  document.getElementById("soulurge2").innerHTML = lifePathNumber;
  document.getElementById("manifesto").innerHTML = manifesto;
  document.getElementById("namecontent").innerHTML = namecontent;
  document.getElementById("destinycontent").innerHTML = destinycontent;
  document.getElementById("birthdatecontent").innerHTML = birthDatecontent;
  document.getElementById("illnumber").innerHTML = lifePathNumber;
  userCharts.push({
    name: name,
    birthDate: birthDate,
    birthMonth: birthMonth,
    birthYear: birthYear,
    soulUrgeNumber: soulUrgeNumber,
    personalityNumber: personalityNumber,
    nameNumber : calculateSingleDigit(soulUrgeNumber + personalityNumber),
    destinyNumber : calculateSingleDigit(soulUrgeNumber + personalityNumber),
    lifePathNumber: lifePathNumber,
  });
  localStorage.setItem('userCharts', JSON.stringify(userCharts));
  updateCharts();
}

function calculateAgain() {
  document.getElementById("name").value = "";
  document.getElementById("birthDate").value = "";
  document.getElementById("birthMonth").value = "";
  document.getElementById("birthYear").value = "";

  document.getElementById("calculator").style.display = "block";
  document.getElementById("result").style.display = "none";
}

var SUcontent = "";



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
document.getElementById("dailyTab").addEventListener("click", () => openPage("daily", document.getElementById("dailyTab")));
document.getElementById("historyTab").addEventListener("click", () => openPage("history", document.getElementById("historyTab")));
openPage("about", document.getElementById("aboutTab"));

document.getElementById("calculateButton").addEventListener("click", calculateNumerology);
document.getElementById("calculateAgainButton").addEventListener("click", calculateAgain);
function getUserData() {
  const userData = localStorage.getItem("userCharts");

  if (userData) {
    return JSON.parse(userData);
  } else {
    return null;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // Get the user's information from localStorage
  const userData = getUserData();

  if (userData) {
    // Add the user's information to the array
    userCharts.push(userData);
  }
});
function updateCharts() {
  const chartsList = document.getElementById("charts");

  chartsList.innerHTML = "";

  for (const chart of userCharts) {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>Name:</strong> ${chart.name}
      <br />
      <strong>Birth Date:</strong> ${chart.birthDate}
      <br />
      <strong>Birth Month:</strong> ${chart.birthMonth}
      <br />
      <strong>Birth Year:</strong> ${chart.birthYear}
      <br />
      <strong>Soul Urge Number:</strong> ${chart.soulUrgeNumber}
      <br />
      <strong>Personality Number:</strong> ${chart.personalityNumber}
      <br />
      <strong>Life Path Number:</strong> ${chart.lifePathNumber}
    `;

    chartsList.appendChild(li);
  }
}

