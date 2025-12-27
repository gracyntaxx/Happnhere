function pageLoaded() {
  console.log("✅ Sign-in page loaded successfully!");
  alert("Welcome to happnHere! Fill the form to join the community 🎉");
}

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value.trim();
  let agree = document.getElementById("agree").checked;

  if (name === "" || email === "" || password === "" || phone === "") {
    alert("Please fill out all fields.");
    return false;
  }

  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
  if (!gmailPattern.test(email)) {
    alert("Please enter a valid Gmail address (must end with @gmail.com).");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Enter a valid 10-digit phone number.");
    return false;
  }

  if (!agree) {
    alert("You must agree to the Terms & Conditions.");
    return false;
  }

  alert("🎉 Form submitted successfully! Welcome to happnHere 💃");
  
  // Redirect after successful validation
  window.location.href = "Signedindex.html";
  return false; // prevent default form action
}

function resetForm() {
  alert("Form has been reset.");
  document.getElementById("strengthBar").value = 0;
}

document.addEventListener("input", function (event) {
  if (event.target.id === "password") {
    let progress = document.getElementById("strengthBar");
    let length = event.target.value.length * 15;
    if (length > 100) length = 100;
    progress.value = length;
  }
});
