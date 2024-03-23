const submit= document.getElementById("notify-button");
const email = document.getElementById("email");
const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-z]{3}$/;

submit.addEventListener("click", () => {
  if (email.value == "" || !regex.test(email.value)) {
    alert("Please provide a valid email address");
  } else {
    alert("Thanks for subscribing!");
  }
});