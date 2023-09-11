'use strict';

const NICE_HUSH_DESCRIPTION = "Event: BigRock Game Jam.<br>Team: 3 developers, 4 3D artists.<br><br>Multiplayer game for Twitch chat.";
const FRIENDS_NOT_FOUND_DESCRIPTION = "Event: GameDev.tv Game Jam 2021.<br>Team : 10 members.<br><br>Game design, team management, asset implementation and gameplay development.";
const TIMEPURA_EBI_DESCRIPTION = "Event: Bullet Hell Jam 2021.<br>Team: 7 members.<br><br>I took care of the assets implementation, gameplay development and UI system.";
const METAPOETRY_DESCRIPTION = "Partner Company: Alterego Digital LAB.<br><br>Team: 7 members.<br>Technical consulting for vr experience.";
const H_ALLIDAY_DESCRIPTION = "Company: H-Farm.<br>Team : 3 programmers, 3 3D artists, 1 UI artist, 1 product designer.<br>My role: UI programmer, tool programmer, gameplay programmer.<br><br>Multiplayer virtual reality classroom for Meta Quest 1 and Meta Quest 2 standalone.";
const DEBATE_DESCRIPTION = "Company:H-Farm.<br>Team : 3 programmers, 3 3D artists.<br>My role: UI programmer, gameplay programmer.<br><br>Multiplayer VR experience with role system.<br>Prototype of a virtual debate championship, tested by Indire to develop an official virtual format.";
const BRIDGETOAVALON_DESCRIPTION = "Companies:BigRock, Cisco.<br>Team : 2 developers, 2 3D artists.<br>My role: game designer, gameplay programmer, integration with server backend, asset integration and optimization, shader art, vfx optimization.<br><br>VR multiplayer brainstorming activity in fantasy setting for Cisco employees.";
const FALCONERIA_DESCRIPTION = "Company:BigRock.<br>Team : 2 developers, 2 3D artists.<br>My role: game designer, gameplay programmer, asset integration and optimization, shader art, vfx.<br><br>VR narrative experience on falconry with a falconry history museum.";

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
const modalText = document.querySelector("[data-modal-text]");
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

    let text;
    let link;

    switch (modalTitle.innerHTML) {
      case "Nice Hush":
        text = NICE_HUSH_DESCRIPTION;
        link = "https://github.com/SanzioPedersoli/JamM34";
        break;
      case "Friends Not Found":
        text = FRIENDS_NOT_FOUND_DESCRIPTION;
        link = "https://suletta.itch.io/friends-not-found";
        break;
      case "Timepura Ebi":
        text = TIMEPURA_EBI_DESCRIPTION;
        link = "https://mattonzolo.itch.io/timepura-ebi";
        break;
      case "Meta poetry":
        text = METAPOETRY_DESCRIPTION;
        link = "https://www.linkedin.com/posts/alterego-digital-lab_poesia-musica-realtaeqvirtuale-activity-7072127681487679489-5HgP?utm_source=share&utm_medium=member_android";
        break;
      case "H-Alliday":
        text = H_ALLIDAY_DESCRIPTION;
        link = "";
        break;
      case "Debate":
        text = DEBATE_DESCRIPTION;
        link = "";
        break;
        case "Bridge to Avalon":
        text = BRIDGETOAVALON_DESCRIPTION;
        link = "";
        break;
      case "Falconeria":
        text = FALCONERIA_DESCRIPTION;
        link = "";
        break;
      default:
        text = "Aggiungi testo";
        link = "Aggiungi link";
        break;

    }

    modalText.innerHTML = text;

    if(link){
      modalLink.innerHTML = "Project link";
      modalLink.href = link;
      modalAltLink.innerHTML = "";
    }
    else{
      modalAltLink.innerHTML = "Link not available. Contact me for more info";
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