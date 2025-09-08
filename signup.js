const signupForm = document.getElementById("signupForm");
const msg = document.getElementById("signupMsg");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

  // Get saved users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user already exists
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    msg.style.color = "red";
    msg.innerText = "User already exists! Please login.";
    return;
  }

  // Check password match
  if (password !== confirmPassword) {
    msg.style.color = "red";
    msg.innerText = "Passwords do not match!";
    return;
  }

  // Optional: Check password strength (at least 6 chars)
  if (password.length < 6) {
    msg.style.color = "red";
    msg.innerText = "Password must be at least 6 characters long.";
    return;
  }

  // Save new user
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  msg.style.color = "green";
  msg.innerText = "Signup successful! Redirecting to login...";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
