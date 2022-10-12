var username = document.getElementById("username");
var loginBtn = document.getElementById("login");

// Listen for login click
loginBtn.addEventListener("click", loginHandler);

// Function to login
function loginHandler(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  var localUsername = localStorage.getItem("username");
  if (localUsername !== "") {
    location.href = "index.html";
  } else {
    alert("Please enter a username");
  }
}
