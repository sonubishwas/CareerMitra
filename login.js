const loginForm = document.getElementById("loginForm");
const msgDiv = document.getElementById("msg");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    msgDiv.style.color = "green";
    msgDiv.innerText = "Login successful! Redirecting...";

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    msgDiv.style.color = "red";
    msgDiv.innerText = "Invalid email or password!";
  }
});
