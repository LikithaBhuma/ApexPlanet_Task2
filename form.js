document.getElementById("Form").addEventListener("submit", function(event) {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (!name || !email) {
    alert("Please fill in all fields.");
    event.preventDefault();
    return;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});
