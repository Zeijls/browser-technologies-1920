// Variabelen
// Local storage
const allInputs = document.querySelectorAll("input");

// Reset button
const resetButton = document.querySelector(".reset");

// Typewriting Title
let title = document.getElementById("title");
let firstname = document.getElementById("firstname");

// Share button
const shareButton = document.querySelector(".share-btn");
const overlay = document.querySelector(".overlay");
const shareModal = document.querySelector(".share");

const titleShare = window.document.title;
const url = window.document.location.href;

// Copy button
const copyButton = document.querySelector(".copy");

// Local storage save
allInputs.forEach(x => {
  console.log(x);
  console.log(x.id);

  if (localStorage.getItem(x.id)) {
    console.log(`id ${x.id} zit erin!`);
    x.value = JSON.parse(localStorage.getItem(x.id));
  }

  x.addEventListener("keydown", onEnter);
});

function onEnter(e) {
  if (e.keyCode === 13) {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    console.log({ inputId, inputValue });

    localStorage.setItem(inputId, JSON.stringify(inputValue));
    console.log(localStorage.getItem(inputId));
  }
}

console.log(allInputs);

// Local storage resetten
if (resetButton) {
  resetButton.addEventListener("click", function() {
    localStorage.clear();
    console.log("Local storage is empty!");
    inputValue = " ";
  });
}

// Titel aanpassen aan input
if (firstname) {
  firstname.addEventListener("input", function() {
    title.innerHTML = "Welkom, " + firstname.value;
  });
}
// Share Button
if (shareButton) {
  shareButton.addEventListener("click", function() {
    if (navigator.share) {
      navigator
        .share({
          url: url,
          text: shareList
        })
        .then(function() {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      overlay.classList.add("show-share");
      shareModal.classList.add("show-share");
    }
  });

  overlay.addEventListener("click", function() {
    overlay.classList.toggle("show-share");
    shareModal.classList.toggle("show-share");
  });
}

// Copy Link button
if (copyButton) {
  copyButton.addEventListener("click", function() {
    console.log("ik heb de button geklikt");

    const copyText = document.getElementById("myInput");
    //Selecteerd de tekst field
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    // Kopieer alle text binnen het tekst field
    document.execCommand("copy");

    // Allert (feedback) dat de text is gekopieerd
    alert("Copied the text: " + copyText.value);
  });
}
