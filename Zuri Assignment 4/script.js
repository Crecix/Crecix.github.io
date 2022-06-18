var email = document.getElementById("mail");
email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Looks like this is not an email");
  } else {
    email.setCustomValidity("");
  }
});