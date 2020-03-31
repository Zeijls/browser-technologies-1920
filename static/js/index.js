const shareButton = document.querySelector("[share-btn]");
const resetButton = document.querySelector(".reset");

// Local storage save

const allInputs = document.querySelectorAll("input");

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
// resetButton.addEventListener("click", reset);

// function reset() {
//   localStorage.clear();
//   inputValue = " ";
// }

// Titel aanpassen aan input

let title2 = document.getElementById("title");
let firstname = document.getElementById("firstname");
if (firstname) {
  firstname.addEventListener("input", function() {
    title2.innerHTML = "Welkom, " + firstname.value;
  });
}
// Share Button
const overlay = document.querySelector(".overlay");
const shareModal = document.querySelector(".share");

const title = window.document.title;
const url = window.document.location.href;

if (shareButton) {
  shareButton.addEventListener("click", function() {
    if (navigator.share) {
      navigator
        .share({
          title: `${title}`,
          list: `${list}`
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
}

if (overlay) {
  overlay.addEventListener("click", function() {
    overlay.classList.remove("show-share");
    shareModal.classList.remove("show-share");
  });
}

// Copy Button Save link

// (function() {
//   var copyButton = document.querySelector(".copy");
//   var copyInput = document.querySelector(".save-page article a");
//   copyButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     var text = copyInput.select();
//     document.execCommand("copy");
//   });

//   copyInput.addEventListener("click", function() {
//     this.select();
//   });
// })();

// (function() {
//   var copylinkbtn = document.getElementById("copy-link-btn"),
//     copylink = document.getElementById("copy-link-wrapper"),
//     overlay = document.getElementById("overlay");

//   copylinkbtn.addEventListener(
//     "click",
//     function() {
//       var error = document.getElementsByClassName("error");

//       while (error[0]) {
//         error[0].parentNode.removeChild(error[0]);
//       }

//       document.body.className += " active";

//       copylink.children[2].value = window.location.href;
//       copylink.children[2].focus();
//       copylink.children[2].select();
//     },
//     false
//   );

//   overlay.addEventListener(
//     "click",
//     function() {
//       document.body.className = "";
//     },
//     false
//   );

//   copylink.children[2].addEventListener(
//     "keydown",
//     function(e) {
//       var error = document.getElementsByClassName("error");

//       while (error[0]) {
//         error[0].parentNode.removeChild(error[0]);
//       }

//       setTimeout(function() {
//         if (
//           (e.metaKey || e.ctrlKey) &&
//           e.keyCode === 67 &&
//           isTextSelected(copylink.children[2])
//         ) {
//           document.body.className = "";
//         } else if (
//           (e.metaKey || e.ctrlKey) &&
//           e.keyCode === 67 &&
//           isTextSelected(copylink.children[2]) === false
//         ) {
//           var error = document.createElement("span");
//           error.className = "error";
//           var errortext = document.createTextNode(
//             "The link was not copied, make sure the entire text is selected."
//           );

//           error.appendChild(errortext);
//           copylink.appendChild(error);
//         }
//       }, 100);

//       function isTextSelected(input) {
//         if (typeof input.selectionStart == "number") {
//           return (
//             input.selectionStart == 0 &&
//             input.selectionEnd == input.value.length
//           );
//         } else if (typeof document.selection != "undefined") {
//           input.focus();
//           return document.selection.createRange().text == input.value;
//         }
//       }
//     },
//     false
//   );
// })();
