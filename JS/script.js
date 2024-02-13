// For small screen menu open and close code


document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.toggle_btn');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  // Remove 'open' class initially
  dropdownMenu.classList.remove('open');

  toggleBtn.addEventListener('click', function () {
      dropdownMenu.classList.toggle('open');
  });
});




function subscribe() {
  // Add your backend integration logic here (e.g., store email in database)
  alert("Thank you for subscribing! You will receive our updates shortly.");
  return false; // Prevent form submission for this example
}
