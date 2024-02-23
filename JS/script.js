// For small screen menu open and close code

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle_btn");
  const dropdownMenu = document.querySelector(".dropdown_menu");

  // Remove 'open' class initially
  dropdownMenu.classList.remove("open");

  toggleBtn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("open");
  });
});

function validateForm() {
  var usernameInput = document.getElementById("a_email");
  var passwordInput = document.getElementById("a_password");

  // Get values from inputs
  var username = usernameInput.value.trim();
  var password = passwordInput.value.trim();

  // Check if the provided username and password match the expected values
  if (username === "vandan.raval@learniphi.com" && password === "vandan@1234") {
    alert("Login successful!");
    window.location.href = "../adminDashboard.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

function openAdminLogin() {
  window.open("./admin_login.html", "_blank"); // '_blank' opens the link in a new tab
}

function subscribe() {
  // Add your backend integration logic here (e.g., store email in database)
  alert("Thank you for subscribing! You will receive our updates shortly.");
  return false; // Prevent form submission for this example
}

// text animation css
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

const texts = [
  "Tracking ",
  "Wellness ",
  "Across ",
  "Borders.",
  "Please",
  "Give",
  "a Love",
  ":)",
  "Global Health Tracker",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

animate();

function eventDetails() {
  alert("Your Event Booked Successfully");
}

// for home page animation
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    addInViewClass(".hero-section");
    addInViewClass(".hero-section-1");
    addInViewClass(".hero-section-2");
    addInViewClass(".hero-section-3");
    addInViewClass(".news-letters-section");
  });
});

function addInViewClass(selector) {
  var elements = document.querySelectorAll(selector);

  elements.forEach(function (element) {
    var position = element.getBoundingClientRect();

    // Adjust the "100" based on when you want the animation to start
    if (position.top < window.innerHeight - 70 && position.bottom >= 50) {
      element.classList.add("in-view");
    } else {
      element.classList.remove("in-view");
    }
  });
}
