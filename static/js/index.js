const shareButton = document.querySelector("[share-btn]");
// const listsContainer = document.querySelector("[data-lists]");
// const newListForm = document.querySelector("[data-new-list-form]");
// const newListInput = document.querySelector("[data-new-list-input]");
// const deleteButton = document.querySelector("[delete-btn]");
// // const shareButton = document.querySelector("[share-btn]");
// // Save and store things on the user's browsers
// // Create keys to store information
// // Make a name space, it prevents you from overwriting information that is already in the local storage
// const LOCAL_STORAGE_LIST_KEY = "task.lists";

// // the list is getting stored in task.lists
// // get the information from the localstorage with json.parse
// // it's getting out in a object or give us a empty array to start (default)
// let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

// newListForm.addEventListener("submit", element => {
//   // every time when you click on enter, the pages refreshed, preventDefault prevents this
//   element.preventDefault();
//   const listName = newListInput.value;
//   // user have to type something
//   if (listName == null || listName === " ") return;
//   const list = createList(listName);
//   newListInput.value = null;
//   lists.push(list);
//   saveAndRender();
// });

// function createList(name) {
//   return {
//     id: Date.now().toString(),
//     name: name
//   };
// }

// function render() {
//   clearElement(listsContainer);
//   renderLists();
// }

// function renderLists() {
//   lists.forEach(list => {
//     const listElement = document.createElement("li");
//     listElement.classList.add("list-name");
//     listElement.innerText = list.name;
//     listsContainer.appendChild(listElement);
//   });
// }

// function saveAndRender() {
//   save();
//   render();
// }

// function save() {
//   localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));

//   //if localStorage.getItem(/dewaardediejewilthebben/)
//   //input.innerHTML = localStorage.getItem()
//   //localStorage.removeItem(/waarde die wegmoet/)
// }

// function clearElement(element) {
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
// }

// render();
// saveAndRender();

// function deleteList() {
//   deleteButton.addEventListener("click", function() {
//     if (confirm("Are you sure you want to delete this list?")) {
//       // Delete it!
//       clearElement(listsContainer);
//       localStorage.clear();
//       location.reload();
//     } else {
//       // Do nothing!
//     }
//   });
// }
// deleteList();

// Local storage save values
// BRON: https://www.youtube.com/watch?v=k8yJCeuP6I8
// const name = document.getElementById("input-1");
// const age = document.getElementById("input-2");
// // const code = document.getElementById("input-3");
// // const teacher = document.getElementById("input-4");
// // const course = document.getElementById("input-5");
// const button = document.getElementById("LocalStorage");
// const localStorageOutput = document.getElementById("LocalStorageOutput");

// button.onclick = function() {
//   const name = name.value;
//   const age = age.value;
//   // const code = code.value;
//   // const teacher = teacher.value;
//   // const course = course.value;

//   console.log(name);
//   console.log(age);

//   localStorage.setItem(name, age, code, teacher, course);
//   location.reload();
// };

// for (let i = 0; i < localStorage.length; i++) {
//   const name = localStorage.name(i);
//   const age = localStorage.getItem(name);

//   localStorageOutput.innerHTML += `${name}: ${age}`;
// }

// // Titel aanpassen aan input

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
