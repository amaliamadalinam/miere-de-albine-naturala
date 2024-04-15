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

  console.warn("a[data-page=" + id + "]");
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
      console.warn("click", page);
      showPage(page);
    }

    // console.info("click pe link", a);
  });
}

// executii

showPage(activePage);
initEvents();
