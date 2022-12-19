const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById(password2);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setSuccess = (element) => {
  const div = div.parentElement;
  const errorDisplay = div.querySelector(".error");

  errorDisplay.innerText = "";
  div.classList.add("success");
  div.classList.remove("error");
};

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return validRegex.test(String(email).toLowerCase());

const setError = (element, message) => {
  const div = element.parentElement;
  const errorDisplay = div.querySelector(".error");
};
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be atleast 8 characters");
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(password2, "Please,confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password does not match");
  } else {
    setSuccess(password2);
  }
};
