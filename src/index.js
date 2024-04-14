let activePage = "skills";

//functii publice
function $(selector) {
  const el = document.querySelector(selector);
  // console.info("%o found:", selector, el);
  return el;
}

function hide(id) {
  console.info("hide", id);
  $("#" + id).style.disp;
  // $(`#${id}`); - a 2 a varianta de scriere a codului de mai sus
  ay = "none";
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
function sortSkillsByEndorcements(a, b) {
  console.info("sort", a, b);
  return b.endorcements - a.endorcements;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function showSkills(skills) {
  // skills.sort(sortSkillsByEndorcements);
  skills.sort(sortByName);

  const ul = $("#skills ul");

  const text = skills.map((skill) => {
    let cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }

    console.info(" %o map (%o)", skill.name, cls);
    return `<li class="${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });

  console.warn(skills, text);

  ul.innerHTML = text.join("");
}

function loadSkills() {
  fetch("skills.json").then((r) => {
    r.json().then((skills) => {
      showSkills(skills);
    });
  });
}

// executii

showPage(activePage);
initEvents();
loadSkills();
