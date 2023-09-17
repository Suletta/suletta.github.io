'use strict';

const NICE_HUSH_DESCRIPTION = "Event: BigRock Game Jam.<br>Team: 3 developers, 4 3D artists.<br>Multiplayer game for Twitch chat.";
const FRIENDS_NOT_FOUND_DESCRIPTION = "Event: GameDev.tv Game Jam 2021.<br>Team: 10 members.";
const TIMEPURA_EBI_DESCRIPTION = "Event: Bullet Hell Jam 2021.<br>Team: 7 members.";
const METAPOETRY_DESCRIPTION = "Partner Company: Alterego Digital LAB.<br>Team: 7 members.";
const H_ALLIDAY_DESCRIPTION = "Company: H-Farm.<br>Team: 3 programmers, 3 3D artists, 1 UI artist, 1 product designer.<br>Multiplayer virtual reality classroom for Meta Quest 1 and Meta Quest 2 standalone.";
const DEBATE_DESCRIPTION = "Company: H-Farm.<br>Team: 3 programmers, 3 3D artists.<br>Multiplayer VR experience with role system.<br>Prototype of a virtual debate championship, tested by Indire to develop an official virtual format.";
const BRIDGETOAVALON_DESCRIPTION = "Companies: BigRock, Cisco.<br>Team : 2 developers, 2 3D artists.<br>VR multiplayer brainstorming activity in fantasy setting for Cisco employees.";
const FALCONERIA_DESCRIPTION = "Company: BigRock.<br>Team: 2 developers, 2 3D artists.<br>VR narrative experience on falconry with a falconry history museum.";

const NICE_HUSH_ROLE = "Game design, UI programming, asset integration.";
const FRIENDS_NOT_FOUND_ROLE = "Game design, team management, asset implementation and gameplay development.";
const TIMEPURA_EBI_ROLE = "Assets implementation, gameplay development and UI system.";
const METAPOETRY_ROLE = "Technical consulting and experience design.";
const H_ALLIDAY_ROLE = "UI programmer, tool programmer, gameplay programmer.";
const DEBATE_ROLE = "Experience designer, UI programmer, gameplay programmer.";
const BRIDGETOAVALON_ROLE = "Game designer, gameplay programmer, integration with server backend, asset integration and optimization, shader art, vfx optimization.";
const FALCONERIA_ROLE = "Game designer, gameplay programmer, asset integration and optimization, shader art, vfx.";

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


//MODAL
//projects variables
const testimonialsItem = document.querySelectorAll("[data-projects-item]");
const overlay = document.querySelector("[data-overlay]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalProjectText = document.querySelector("[data-modal-project-text]");
const modalRoleText = document.querySelector("[data-modal-role-text]");
const modalLink = document.querySelector("[data-modal-link]");
const modalAltLink = document.querySelector("[data-modal-alt-link]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalTitle.innerHTML = this.querySelector("[data-projects-title]").innerHTML;
    modalImg.src = this.querySelector("[data-projects-avatar]").src;
    modalImg.alt = this.querySelector("[data-projects-avatar]").alt;

    let projectText;
    let roleText;
    let link;

    switch (modalTitle.innerHTML) {
      case "Nice Hush":
        projectText = NICE_HUSH_DESCRIPTION;
        roleText = NICE_HUSH_ROLE;
        link = "https://github.com/SanzioPedersoli/JamM34";
        break;
      case "Friends Not Found":
        projectText = FRIENDS_NOT_FOUND_DESCRIPTION;
        roleText = FRIENDS_NOT_FOUND_ROLE;
        link = "https://suletta.itch.io/friends-not-found";
        break;
      case "Timepura Ebi":
        projectText = TIMEPURA_EBI_DESCRIPTION;
        roleText = TIMEPURA_EBI_ROLE;
        link = "https://mattonzolo.itch.io/timepura-ebi";
        break;
      case "Meta poetry":
        projectText = METAPOETRY_DESCRIPTION;
        roleText = METAPOETRY_ROLE;
        link = "https://www.linkedin.com/posts/alterego-digital-lab_poesia-musica-realtaeqvirtuale-activity-7072127681487679489-5HgP?utm_source=share&utm_medium=member_android";
        break;
      case "H-Alliday":
        projectText = H_ALLIDAY_DESCRIPTION;
        roleText = H_ALLIDAY_ROLE;
        link = "";
        break;
      case "Debate":
        projectText = DEBATE_DESCRIPTION;
        roleText = DEBATE_ROLE;
        link = "";
        break;
        case "Bridge to Avalon":
        projectText = BRIDGETOAVALON_DESCRIPTION;
        roleText = BRIDGETOAVALON_ROLE;
        link = "";
        break;
      case "Falconeria":
        projectText = FALCONERIA_DESCRIPTION;
        roleText = FALCONERIA_ROLE;
        link = "";
        break;
      default:
        projectText = "Aggiungi testo";
        roleText = "Aggiungi testo";
        link = "Aggiungi link";
        break;

    }

    modalProjectText.innerHTML = projectText;
    modalRoleText.innerHTML = roleText;

    if(link){
      modalLink.innerHTML = "Project link";
      modalLink.href = link;
      modalAltLink.innerHTML = "";
    }
    else{
      modalAltLink.innerHTML = "Link not available. Contact me for more info.";
      modalLink.innerHTML = "";
    }

    testimonialsModalFunc();

  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}