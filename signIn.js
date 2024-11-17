document.addEventListener("DOMContentLoaded", () => {
  const signInSubmit = document.getElementById("signInSubmit");
  const signInEmail = document.getElementById("email");
  const signInPassword = document.getElementById("password");
  const flipBtn = document.getElementById("flip");
  const signUpSubmit = document.getElementById("signUpSubmit");
  const signUpEmail = document.getElementById("emailUp");
  const signUpPassword = document.getElementById("passwordUp");
  const flipUpBtn = document.getElementById("flipUp");
  let email;
  let password;
  /*localStorage.setItem("email", "None");
  localStorage.setItem("password", "None");*/
  document.getElementById("name").textContent = localStorage.getItem("email");

  if (localStorage.getItem("email") !== "None") {
    document.getElementById("sign-in-header").classList.add("hideSign");
    document.getElementById("sign-in-header").classList.remove("showSign");
    document.getElementById("account-header").classList.remove("hideSign");
    document.getElementById("account-header").classList.add("showSign");
  } else {
    document.getElementById("sign-in-header").classList.remove("hideSign");
    document.getElementById("sign-in-header").classList.add("showSign");
    document.getElementById("account-header").classList.remove("showSign");
    document.getElementById("account-header").classList.add("hideSign");
  }

  flipBtn.addEventListener("click", () => {
    document.getElementById("sign-up-base").classList.remove("hideLog");
    document.getElementById("sign-up-base").classList.add("showLog");
    document.getElementById("login-base").classList.remove("showLog");
    document.getElementById("login-base").classList.add("hideLog");
  });
  flipUpBtn.addEventListener("click", () => {
    document.getElementById("sign-up-base").classList.remove("showLog");
    document.getElementById("sign-up-base").classList.add("hideLog");
    document.getElementById("login-base").classList.remove("hideLog");
    document.getElementById("login-base").classList.add("showLog");
  });

  signInSubmit.addEventListener("click", () => {
    email = signInEmail.value;
    password = signInPassword.value;
    if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      alert("Successfully logged in");
      window.location.href = "index.html";
      return;
    } else if (
      email !== localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      alert("This email does not exist");
      window.location.href = "signup.html";
    } else if (
      email === localStorage.getItem("email") &&
      password !== localStorage.getItem("password")
    ) {
      alert("Incorrect password");
      window.location.href = "signup.html";
    } else {
      alert("Incorrect email and password");
      window.location.href = "signup.html";
    }
  });
  signUpSubmit.addEventListener("click", () => {
    email = signUpEmail.value;
    password = signUpPassword.value;
    if (email !== localStorage.getItem("email")) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      window.location.href = "index.html";
    } else {
      alert("This email already exists");
      window.location.href = "signup.html";
    }
  });
});

let accountBackCheck = document.getElementById("back-to-home");
if (accountBackCheck) {
  accountBackCheck.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

let logoutCheck = document.getElementById("logout");
if (logoutCheck) {
  logoutCheck.addEventListener("click", () => {
    window.alert("Successfully logged out");
    localStorage.setItem("email", "None");
    localStorage.setItem("password", "None");
    window.location.href = "index.html";
  });
}
