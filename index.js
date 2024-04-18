let activePage = "pov2";

//functii publice
function $(selector) {
  const el = document.querySelector(selector);
  // console.info("%o found:", selector, el);
  return el;
}

function hide(id) {
  console.info("hide", id);
  $("#" + id).style.display = "none";
  // $(`#${id}`); - a 2 a varianta de scriere a codului de mai sus
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  const page = $(`#${id}`);
  console.debug("show page", id);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);

  const prevLink = $("a[data-page=" + activePage + "]");

  //string concatination folosit mai sus
  hide(activePage);
  prevLink.classList.remove("active");

  // console.warn("a[data-page=" + id + "]");
  // console.warn(`a[data-page=${id}`); - ambele variante de string scris sunt corecte
  // consolele sunt folosite pentru verificare daca se preia corect id de pe pagina activa

  const nextLink = $(`a[data-page=${id}`);
  //string template folosit mai sus
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}
// var nextLink = document.querySelector("a[data-page=" + id + "]");
// alta modalitate de a scrie codul de mai sus prin string template
// var nextLink = document.querySelector("a[data-page=skills]"); apoi
// var nextLink = document.querySelector(`a[data-page=${id}]`)

function initEvents() {
  const toolbar = $("#top-menu-bar");
  console.info("toolbar", toolbar);
  toolbar.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      const page = e.target.dataset.page;
      // console.warn("click", page);
      showPage(page);
    }

    // console.info("click pe link", a);
  });
}
function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Open the popup when the page loads
window.onload = function () {
  openPopup();
};

// function search() {
//   // Get the search query
//   var query = document.getElementById("searchInput").value.trim().toLowerCase();

//   // Get all the elements to search through
//   var elements = document.querySelectorAll(".searchable");

//   // Clear previous search results
//   document.getElementById("searchResults").innerHTML = "";

//   // Loop through all elements
//   elements.forEach(function (element) {
//     var content = element.textContent.trim().toLowerCase();

//     // Check if the content contains the search query
//     if (content.includes(query)) {
//       // If it matches, add it to the search results
//       var resultItem = document.createElement("div");
//       resultItem.textContent = content;
//       document.getElementById("searchResults").appendChild(resultItem);
//     }
//   });
// }

// executii

showPage(activePage);
initEvents();
search();
