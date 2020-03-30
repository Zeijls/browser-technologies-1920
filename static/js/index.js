// function persistInput(input) {
//   var key = "input-" + input.id;

//   var storedValue = localStorage.getItem(key);

//   if (storedValue) input.value = storedValue;

//   input.addEventListener("input", function() {
//     localStorage.setItem(key, input.value);
//   });
// }

// var inputEmail = document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

// function store() {
//   var inputEmail = document.getElementById("email");
//   localStorage.setItem("email", inputEmail.value);
// }

// Titel aanpassen aan input
title = document.getElementById("title");
firstname = document.getElementById("firstname");

firstname.addEventListener("input", function() {
  title.innerHTML = "Welkom, " + firstname.value;
});
