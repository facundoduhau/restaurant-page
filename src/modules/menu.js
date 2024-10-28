import { makeHome } from "./home";
import { makeAbout } from "./about";

function makeMenu() {
  // Clear the wrapper
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";

  // Create header
  const header = document.createElement("div");
  header.className = "header";

  // Create name div
  const name = document.createElement("div");
  name.className = "name";
  name.textContent = "Espresso Oasis";
  header.appendChild(name);

  // Create buttons container
  const buttons = document.createElement("div");
  buttons.className = "buttons";

  // Create individual buttons
  const buttonNames = ["Home", "Menu", "About"];
  buttonNames.forEach((btnName) => {
    const button = document.createElement("button");
    button.className = `button ${btnName.toLowerCase()}`;
    button.textContent = btnName;
    buttons.appendChild(button);
  });
  header.appendChild(buttons);

  const main = document.createElement("main");
  main.className = "main";

  const menu = document.createElement("div");
  menu.className = "menu-wrapper";
  main.appendChild(menu);

  const espressoMenu = document.createElement("div");
  espressoMenu.className = "espressoMenu";
  menu.appendChild(espressoMenu);

  const menuTitleWrapper = document.createElement("div");
  menuTitleWrapper.classList = "menu-title-wrapper";
  espressoMenu.appendChild(menuTitleWrapper);

  const menuContentWrapper = document.createElement("div");
  menuContentWrapper.classList = "menu-content-wrapper";
  espressoMenu.appendChild(menuContentWrapper);

  const menuTitle = document.createElement("div");
  menuTitle.classList = "menu-title";
  menuTitle.innerHTML = "Choose from our selection:";
  menuTitleWrapper.appendChild(menuTitle);

  const element1 = document.createElement("div");
  element1.classList = "item";
  menuContentWrapper.appendChild(element1);
  const element2 = document.createElement("div");
  element2.classList = "item";
  menuContentWrapper.appendChild(element2);
  const element3 = document.createElement("div");
  element3.classList = "item";
  menuContentWrapper.appendChild(element3);
  const element4 = document.createElement("div");
  element4.classList = "item";
  menuContentWrapper.appendChild(element4);
  const element5 = document.createElement("div");
  element5.classList = "item";
  menuContentWrapper.appendChild(element5);
  const element6 = document.createElement("div");
  element6.classList = "item";
  menuContentWrapper.appendChild(element6);
  const element7 = document.createElement("div");
  element7.classList = "item";
  menuContentWrapper.appendChild(element7);
  const element8 = document.createElement("div");
  element8.classList = "item";
  menuContentWrapper.appendChild(element8);

  const coffee = document.createElement("img");
  coffee.src = "./imgs/coffee.png";
  coffee.style.width = "18vh";
  coffee.style.height = "18vh";
  element1.appendChild(coffee);

  const icedLatte = document.createElement("img");
  icedLatte.src = "./imgs/iced-latte.png";
  icedLatte.style.width = "15vh";
  icedLatte.style.height = "15vh";
  element2.appendChild(icedLatte);

  const submarine = document.createElement("img");
  submarine.src = "./imgs/submarine.png";
  submarine.style.width = "20vh";
  submarine.style.height = "20vh";
  element3.appendChild(submarine);

  const espresso = document.createElement("img");
  espresso.src = "./imgs/espresso.png";
  espresso.style.width = "15vh";
  espresso.style.height = "15vh";
  element4.appendChild(espresso);

  const bagel = document.createElement("img");
  bagel.src = "./imgs/bagel.png";
  bagel.style.width = "20vh";
  bagel.style.height = "20vh";
  element5.appendChild(bagel);

  const sandwich = document.createElement("img");
  sandwich.src = "./imgs/sandwich.png";
  sandwich.style.width = "15vh";
  sandwich.style.height = "15vh";
  element6.appendChild(sandwich);

  const medialuna = document.createElement("img");
  medialuna.src = "./imgs/medialuna.png";
  medialuna.style.width = "18vh";
  medialuna.style.height = "18vh";
  element7.appendChild(medialuna);

  const muffin = document.createElement("img");
  muffin.src = "./imgs/muffin.png";
  muffin.style.width = "18vh";
  muffin.style.height = "18vh";
  element8.appendChild(muffin);

  const footer = document.createElement("footer");
  footer.className = "footer";
  // Create github link
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/facundoduhau";
  githubLink.target = "_blank";

  // Create copyright paragraph
  const copyright = document.createElement("p");
  copyright.className = "copyright";
  copyright.textContent = "Copyright © facundoduhau";
  githubLink.appendChild(copyright);
  footer.appendChild(githubLink);

  // Append all sections to the existing wrapper
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  wrapper.appendChild(footer);

  const homeButton = document.querySelector(".home");
  homeButton.addEventListener("click", makeHome);

  const aboutButton = document.querySelector(".about");
  aboutButton.addEventListener("click", makeAbout);
}

export { makeMenu };
